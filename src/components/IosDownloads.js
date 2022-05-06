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
      <div className="top-left">{/*top-left  */}
        <h6>Highest iOS Download:</h6>
        <hr/>
        <h3>{numFormat(maxValue)}</h3>
        <hr/>
        <h6>at: {maxDate}</h6>
      </div>
    );
  }