import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UserInputFormContent({handleSubmit, handleChange, handleFormSubmit, userName, favState}) { 
  //console.log("handleSubmit is: " + handleSubmit + "handleChange is: " + handleChange + "handleFormSubmit is: " + handleFormSubmit + "inputs is: [" + userName +", " + favState + "]");
  return(
    <form onSubmit={handleSubmit}>
      <Row  lg="6">
        <Col lg="6">
        <label>Enter your name: <span className="required">*</span><br/>
          <input 
            type="text" 
            name="userName" 
            value={userName || ""}  
            onChange={handleChange}
            required  
          />
        </label>  
        </Col>
        
        <Col lg="6" className="auto left">
        <label>What is your favorite state? <span className="required">*</span><br/>
          <input 
            type="string" 
            name="favState" 
            value={favState|| ""} 
            onChange={handleChange} 
            required 
          />
        </label> 
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="submit" onClick={handleFormSubmit} />
        </Col>
      </Row>
    </form> 
  );
}

export default UserInputFormContent;