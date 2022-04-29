import React, {useState, useCallback, useEffect} from 'react';
import {scaleBand,scaleLinear,max,format, csv} from 'd3';
import { AxisX } from './components/AxisX';
import { AxisY } from './components/AxisY';
import { Bars } from './components/Bars';
import { DateInput } from './components/DateInput';
import { FileUpload } from './components/FileUpload';
import { AndroidDownloads } from './components/AndroidDownloads';
import { IosDownloads } from './components/IosDownloads';
import axios from 'axios';
import './style.css';

//Barchart dimensions 
const width = 900;
const height = 400;
const margin = {
  top: 50,
  right: 25,
  bottom: 55,
  left: 100,
};
const xAxisLabelOffset = 55;

export const App = () => {

  let[data, setData] = useState([]);
  const[selectedDate, setSelectedDate] = useState('');
  const[file,setFile] = useState('');
  const[filename, setFilename] = useState('Choose File');
  const[uploadedFile,setUploadedFile] = useState({});
  const[message,setMessage] = useState('');
 
//File upload
  const onFileChange = e => {
      setFile(e.target.files[0]);
      setFilename((e.target.files[0].name));
  }; 
 
  const onSubmit = async e => {
      e.preventDefault(); 
      const formData = new FormData();
      formData.append('file',file);
      try{ 
        const res = await axios.post('/upload',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const { fileName, filePath } = res.data;
        setUploadedFile({ fileName, filePath });
        console.log({filePath}); 
        console.log({uploadedFile});
        setMessage('File Uploaded');
        console.log('File Uploaded');
      } catch(err){
        if(err.response.status === 500) {
            console.log( 'There was a server problem...' );
        }else{
            console.log(err.response.data.msg)
        } 
      }
  };
   
//Data setting  
  const csvUrl = uploadedFile.filePath; //'/uploads/mobiledownloads.csv'
  console.log(csvUrl);
  useEffect(() => {
    const row = (d) => {
      d.Downloads = +d.Downloads  //turns Downloads from string into integer 
      return d;
    };
    csv(csvUrl,row).then((data) => {

      setData((data !== "") ? data: "");});
  }, []);

  
//Date selection 
  const onChange = e => setSelectedDate((e.target.value).toString());
  const dateFormat = selectedDate.slice(5,7)+"/"+selectedDate.slice(8,11)+"/"+selectedDate.slice(0,4);


//Slicing data by date selected
  if (!data) {return <pre>Loading...</pre>;}
  
  const dateFromData = [data.map(d => d.Date)];
  const dateViz = (data) => data === dateFormat  //dateFormat is date entered
  console.log(data[dateFromData[0].findIndex(dateViz)]); // finds the index of a date that equals dateFormat
  let srce = dateFromData[0].findIndex(dateViz); 
  let dest = srce+2; 
  let datum = data.slice(srce,dest);
  console.log(datum); 
  
//Bar chart props setting
 
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const numFormat = format(",");
  
  const yScale = scaleBand()
    .domain(datum.map(d => d.Device))
    .range([0, innerHeight])
  	.padding(0.5);
  
  const xScale = scaleLinear()
    .domain([0, max(datum, d => d.Downloads+100)]) // /1+100 to turn the value of d.Downloads to int, then add an int to keep 'ticks' or the number labels         
    .range([0, innerWidth]);                      //larger that the value of Downloads column of selected rows

  return (
    <>
    <AndroidDownloads data={data} numFormat={numFormat}/>
    <IosDownloads data={data} numFormat={numFormat}/>
    <div className="chart">   
    <div className="input-style">
      <FileUpload 
          onSubmit={onSubmit}
          onChange={onFileChange}
          filename={filename}
          uploadedFile={uploadedFile}
      />
      
    </div>  
    {/* Chart */}
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>        
				<AxisX 
          xScale = {xScale} 
          innerHeight = {innerHeight}
          tickFormat={numFormat}
          />
        <AxisY yScale = {yScale}/>
        
        <text className="axis-label"
          x={innerWidth/2} 
          textAnchor="middle"
          y={innerHeight + xAxisLabelOffset}>Downloads</text>
        <Bars 
          data = {datum} 
          xScale = {xScale} 
          yScale = {yScale}
          tooltipFormat={numFormat}
          />        
      </g> 
    </svg>    
    {/* Chart */} 
    <DateInput 
          onChange={onChange} 
          date={selectedDate}
      />
    {/* {dateFormat} */}
    </div>
    </>
  );
};


