// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card } from 'react-bootstrap';


export const AndroidDownloads = ({data, numFormat}) => {
    const androidDownloadsFromData = [data.filter(d => d.Device=='Android').map(d => d.Downloads)]; //maps Downloads with Android as Device to androidDownloadsFromData
    const androidDateFromData = [data.filter(d => d.Device=='Android').map(d => d.Date)]; 
    const maxValue = Math.max(...androidDownloadsFromData[0]);
    const downloadViz = (data) => data === maxValue  //dateFormat is date entered
    const maxDate = androidDateFromData[0][androidDownloadsFromData[0].findIndex(downloadViz)];
    console.log('Android');
    console.log('Date of Max: ', maxDate);
    console.log('Max: ', maxValue);
    return(

      // <Card className="cards col-md-3 col-sm-12 mt-1">
      //   <h1>{numFormat(maxValue)}</h1>
      //   <Card.Body> 
      //   <Card.Title>Android Downloads</Card.Title>
      //   <Card.Text>at {maxDate}</Card.Text>
      //   </Card.Body>
      // </Card>
      <div className="top-left">{/*top-left  */}
        <h6>Highest Android Download:</h6>
        <hr/>
        <h3>{numFormat(maxValue)}</h3>
        <hr/>
        <h6>at: {maxDate}</h6>
      </div>
    );
  }  