import { useState } from "react";  

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserInputFormContent from "./UserInputFormContent";

function UserInputForm(passedData) { 

  const dataSetObject =  passedData.dataSet; 

  const [inputs, setInputs] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); 

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value; 
    setInputs(values => ({...values, [name]: value})) 
  }
 
  //sets state of if the form was submitted.
    const handleFormSubmit = () => { 
      if(inputs.userName !== undefined && inputs.favState !== undefined ){
        setIsFormSubmitted(true); 
      }
    } 

  //sets state for the onchange... (controls the form field values)
  const handleSubmit = (event) => {
    event.preventDefault();
  }  

  var stateFound = null; 
  var favCapital = null;

  //If the form hasn't been submitted yet, show the form:
    if (isFormSubmitted == false) {
      return (  
        <UserInputFormContent handleSubmit={handleSubmit} handleChange={handleChange} handleFormSubmit={handleFormSubmit} userName={inputs.userName} favState={inputs.favState}></UserInputFormContent>
      )
    }  
  //Else: get the Capital of the state that was submitted.
    stateFound = dataSetObject.map((dataSetObject) => inputs.favState.trim().toLocaleLowerCase() === dataSetObject.state.toLocaleLowerCase() ? dataSetObject.capitals : "") 
    const filtered = []; 
    for (let i = 0; i < stateFound.length; i++) {
        if (stateFound[i]) {
            filtered.push(stateFound[i]);
        }
    }   
    favCapital = filtered[0];  

  //Now verify the form response to check that the submitted state was in the data.
    if (favCapital == undefined){
      //If fail: show error content. 
      return (
        <>
          <UserInputFormContent handleSubmit={handleSubmit} handleChange={handleChange} handleFormSubmit={handleFormSubmit} userName={inputs.userName} favState={inputs.favState}></UserInputFormContent>
          <div>Whoops! Your favorite state isn't even a state!  Try again, and make sure it's spelled correctly. </div>
        </>
      )
    }//If Success, Show success content.
    return (   
      <Row>  
        <Col>
          <p>Hi <strong>{inputs.userName.trim()}</strong>!<br/> 
          <strong className="fav-state">{inputs.favState}</strong> is my favorite state too! 
          Did you know its capital city is <strong>{favCapital}</strong>?</p>
        </Col>
      </Row>  
    )  
  
}

export default UserInputForm;