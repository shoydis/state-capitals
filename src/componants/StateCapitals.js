import { useState } from "react";
import CityOrState from "./CityOrState";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import MediaDetail from "./MediaDetail";
 
function StateCapitals(passedData) { 

  const dataSetObject = passedData.dataSet;
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null); 
  const [selectedState, setSelectedState] = useState(null); 
  const [isActive, setIsActive] = useState(null); 
  
  var filetype = "jpg";
  var version = "v0_0";
  var filepath = "images"; 

  function clickMe(id, state, city){
    //console.log(id +", "+ city +", "+ state);
    setClickedItem(city);
    setSelectedState(state); 
    setIsActive(id);
  }

   return (
    <> 

      <Container className="StateCapitalsComponant"> 
        <Row>
          <Col lg="126" className=""> 
             <h2>Cheat-sheet:</h2>
          </Col>
          <Col xs="12" lg="6" className="callOut justify-content-md-center"> 
            <MediaDetail clickedItem={clickedItem} selectedState={selectedState} filetype={filetype} version={version} filepath={filepath}></MediaDetail>
          </Col>
          <Col xs="12" lg="6" className="cities">
            <Row className="cityListContainer">
              {dataSetObject.map((dataSetObject) => 
                <Col xs="6" sm="3" lg="3" className={ isActive == dataSetObject.id ? "list active" : "list" } key={dataSetObject.id} id={"dataSetObject"+dataSetObject.id} onMouseOver={() => setHoveredItem(dataSetObject.id)} onMouseOut={() => setHoveredItem(dataSetObject.id)}  onClick={() => clickMe(dataSetObject.id, dataSetObject.state, dataSetObject.capitals)}> 
                  <CityOrState id={dataSetObject.id} hoveredItem={hoveredItem} isActive={isActive} state={dataSetObject.state} capitals={dataSetObject.capitals}></CityOrState>
                </Col>
              )}
            </Row>
          </Col>
        </Row> 
      </Container> 
      
    </>
  );
}

export default StateCapitals;