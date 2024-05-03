//css
  import 'bootstrap/dist/css/bootstrap.css';
  import './global.css'; 
//react
  import React from 'react';
  import ReactDOM from 'react-dom/client';   
//Bootstrap
  import Container from "react-bootstrap/Container";
  import Row from "react-bootstrap/Row";
  import Col from "react-bootstrap/Col";

//custom componants
  import StateCapitals from './componants/StateCapitals'; 
  import UserInputForm from './componants/UserInputForm';
  import Assessment from './componants/Assessment';

function App(){  

  const dataSetObject = [ 
    { 
      id: 1,
      state: "Alabama",
      capitals: "Montgomery",
      "lat": "32.361538",
      "long": "-86.279118"
    },
    { 
      id: 2,
      state: "Alaska",
      capitals: "Juneau",
      "lat": "58.301935",
      "long": "-134.419740"
    },
    { 
      id: 3,
      state: "Arizona",
      capitals: "Phoenix",
      "lat": "33.448457",
      "long": "-112.073844"
    },
    { 
      id: 4,
      state: "Arkansas",
      capitals: "Little Rock",
      "lat": "34.736009",
      "long": "-92.331122"
    },
    { 
      id: 5,
      state: "California",
      capitals: "Sacramento",
      "lat": "38.555605",
      "long": "-121.468926"
    },
    { 
      id: 6,
      state: "Colorado",
      capitals: "Denver",
      "lat": "39.7391667",
      "long": "-104.984167"
    },
    { 
      id: 7,
      state: "Connecticut",
      capitals: "Hartford",
      "lat": "41.767",
      "long": "-72.677"
    },
    { 
      id: 8,
      state: "Delaware",
      capitals: "Dover",
      "lat": "39.161921",
      "long": "-75.526755"
    },
    { 
      id: 9,
      state: "Florida",
      capitals: "Tallahassee",
      "lat": "30.4518",
      "long": "-84.27277"
    },
    { 
      id: 10,
      state: "Georgia",
      capitals: "Atlanta",
      "lat": "33.76",
      "long": "-84.39"
    },
    { 
      id: 11,
      state: "Hawaii",
      capitals: "Honolulu",
      "lat": "21.30895",
      "long": "-157.826182"
    },
    { 
      id: 12,
      state: "Idaho",
      capitals: "Boise",
      "lat": "43.613739",
      "long": "-116.237651"
    },
    { 
      id: 13,
      state: "Illinois",
      capitals: "Springfield",
      "lat": "39.783250",
      "long": "-89.650373"
    },
    { 
      id: 14,
      state: "Indiana",
      capitals: "Indianapolis",
      "lat": "39.790942",
      "long": "-86.147685"
    },
    { 
      id: 15,
      state: "Iowa",
      capitals: "Des Moines",
      "lat": "41.590939",
      "long": "-93.620866"
    },
    { 
      id: 16,
      state: "Kansas",
      capitals: "Topeka",
      "lat": "39.04",
      "long": "-95.69"
    },
    { 
      id: 17,
      state: "Kentucky",
      capitals: "Frankfort",
      "lat": "38.197274",
      "long": "-84.86311"
    },
    { 
      id: 18,
      state: "Louisiana",
      capitals: "Baton Rouge",
      "lat": "30.45809",
      "long": "-91.140229"
    },
    { 
      id: 19,
      state: "Maine",
      capitals: "Augusta",
      "lat": "44.323535",
      "long": "-69.765261"
    },
    { 
      id: 20,
      state: "Maryland",
      capitals: "Annapolis",
      "lat": "38.972945",
      "long": "-76.501157"
    },
    { 
      id: 21,
      state: "Massachusetts",
      capitals: "Boston",
      "lat": "42.2352",
      "long": "-71.0275"
    },
    { 
      id: 22,
      state: "Michigan",
      capitals: "Lansing",
      "lat": "42.7335",
      "long": "-84.5467"
    },
    { 
      id: 23,
      state: "Minnesota",
      capitals: "Saint Paul",
      "lat": "44.95",
      "long": "-93.094"
    },
    { 
      id: 24,
      state: "Mississippi",
      capitals: "Jackson",
      "lat": "32.320",
      "long": "-90.207"
    },
    { 
      id: 25,
      state: "Missouri",
      capitals: "Jefferson City",
      "lat": "38.572954",
      "long": "-92.189283"
    },
    { 
      id: 26,
      state: "Montana",
      capitals: "Helana",
      "lat": "46.595805",
      "long": "-112.027031"
    },
    { 
      id: 27,
      state: "Nebraska",
      capitals: "Lincoln",
      "lat": "40.809868",
      "long": "-96.675345"
    },
    { 
      id: 28,
      state: "Nevada",
      capitals: "Carson City",
      "lat": "39.160949",
      "long": "-119.753877"
    },
    { 
      id: 29,
      state: "New Hampshire",
      capitals: "Concord",
      "lat": "43.220093",
      "long": "-71.549127"
    },
    { 
      id: 30,
      state: "New Jersey",
      capitals: "Trenton",
      "lat": "40.221741",
      "long": "-74.756138"
    },
    { 
      id: 31,
      state: "New Mexico",
      capitals: "Santa Fe",
      "lat": "35.667231",
      "long": "-105.964575"
    },
    { 
      id: 32,
      state: "New York",
      capitals: "Albany",
      "lat": "42.659829",
      "long": "-73.781339"
    },
    { 
      id: 33,
      state: "North Carolina",
      capitals: "Raleigh",
      "lat": "35.771",
      "long": "-78.638"
    },
    { 
      id: 34,
      state: "North Dakota",
      capitals: "Bismarck",
      "lat": "48.813343",
      "long": "-100.779004"
    },
    { 
      id: 35,
      state: "Ohio",
      capitals: "Columbus",
      "lat": "39.962245",
      "long": "-83.000647"
    },
    { 
      id: 36,
      state: "Oklahoma",
      capitals: "Oklahoma City",
      "lat": "35.482309",
      "long": "-97.534994"
    },
    { 
      id: 37,
      state: "Oregon",
      capitals: "Salem",
      "lat": "44.931109",
      "long": "-123.029159"
    },
    { 
      id: 38,
      state: "Pennsylvania",
      capitals: "Harrisburg",
      "lat": "40.269789",
      "long": "-76.875613"
    },
    { 
      id: 39,
      state: "Rhode Island",
      capitals: "Providence",
      "lat": "41.82355",
      "long": "-71.422132"
    },
    { 
      id: 40,
      state: "South Carolina",
      capitals: "Columbia",
      "lat": "34.000",
      "long": "-81.035"
    },
    { 
      id: 41,
      state: "South Dakota",
      capitals: "Pierre",
      "lat": "44.367966",
      "long": "-100.336378"
    },
    { 
      id: 42,
      state: "Tennessee",
      capitals: "Nashville",
      "lat": "36.165",
      "long": "-86.784"
    },
    { 
      id: 43,
      state: "Texas",
      capitals: "Austin",
      "lat": "30.266667",
      "long": "-97.75"
    },
    { 
      id: 44,
      state: "Utah",
      capitals: "Salt Lake City",
      "lat": "40.7547",
      "long": "-111.892622"
    },
    { 
      id: 45,
      state: "Vermont",
      capitals: "Montpelier",
      "lat": "44.26639",
      "long": "-72.57194"
    },
    { 
      id: 46,
      state: "Virginia",
      capitals: "Richmond",
      "lat": "37.54",
      "long": "-77.46"
    },
    { 
      id: 47,
      state: "Washington",
      capitals: "Olympia",
      "lat": "47.042418",
      "long": "-122.893077"
    },
    { 
      id: 48,
      state: "West Virginia",
      capitals: "Charleston",
      "lat": "38.349497",
      "long": "-81.633294"
    },
    { 
      id: 49,
      state: "Wisconsin",
      capitals: "Madison",
      "lat": "43.074722",
      "long": "-89.384444"
    },
    { 
      id: 50,
      state: "Wyoming",
      capitals: "Cheyenne",
      "lat": "41.145548",
      "long": "-104.802042"
    } 
]; 

  return (
  <>    
    <Container className="mainContainer"> 
      <Row className="header">
        <Col xs lg="12">
          <h1>State Capitals:</h1> 
        </Col>
      </Row> 
      <Row className="mainRow"> 
        <Col xs="12" lg="6" className="mainColumn profile"> 
          <h2>Tell us about yourself!</h2>
          <UserInputForm dataSet={dataSetObject}></UserInputForm>   
        </Col>  
        <Col xs="12" lg="6" className="mainColumn test"> 
          <h2>Test Your Knowledge!</h2>
          <Assessment dataSet={dataSetObject}></Assessment>   
        </Col> 
        <Col xs lg="12" className="mainColumn state-list"> 
          <StateCapitals dataSet={dataSetObject}></StateCapitals>     
        </Col> 

      </Row> 
    </Container> 
  </> 
  ); 
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App  />);