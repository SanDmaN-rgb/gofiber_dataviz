// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card } from 'react-bootstrap';

export const IosDownloads = ({data, numFormat}) => {
    const iosDownloadsFromData = [data.filter(d => d.Device=='iOS').map(d => d.Downloads)]; //maps Downloads with iOS as Device to iosDownloadsFromData
    const iosDateFromData = [data.filter(d => d.Device=='iOS').map(d => d.Date)]; 
    const maxValue = Math.max(...iosDownloadsFromData[0]);
    const downloadViz = (data) => data === maxValue  //dateFormat is date entered
    const maxDate = iosDateFromData[0][iosDownloadsFromData[0].findIndex(downloadViz)];
    console.log('iOS');
    console.log('Date of Max: ', maxDate);
    console.log('Max: ', maxValue);
    return(
      // <Card className="cards col-md-3 mt-1">
      //   <h1>{numFormat(maxValue)}</h1>
      //   <Card.Body>
      //     <Card.Title>iOS Downloads</Card.Title>
      //     <Card.Text>at {maxDate}</Card.Text>
      //   </Card.Body>
      // </Card>
      <div className="bg-[#91D8C7] 
                        rounded-md 
                        shadow-lg 
                        py-2 px-2 mx-1.5 my-2 
                        shrink 
                        inline-block 
                        w-1/4 
                        lg:w-[30%]
                        sm:block
                        sm:w-1/2
                        xxs:w-full
                      hover:bg-[#0F8C79] hover:text-white hover:cursor-pointer 
                        duration-300
                        
                      ">{/*top-left  */}
        <h6>Highest iOS Download:</h6>
        <hr className="w-full mt-[5px] mb-[10px]"/>
        <h1 className="text-3xl text-center ">{numFormat(maxValue)}</h1>
        <hr/>
        <h6>at: {maxDate}</h6>
      </div>
    );
  }