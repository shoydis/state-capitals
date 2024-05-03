import { useState } from "react";  
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import React, { useRef } from 'react';

function Assessment({dataSet}) {   
  const userGuess = useRef();
  
  const [count, setCount] = useState(0);   
  const [points, setPoints] = useState(0);   
  const [evaluation, setEvaluation] = useState(0);  
  const [isSubmitted, setIsSubmitted] = useState(0);
  const [submittedGuess, setSubmittedGuess] = useState("");   

  const handleSubmit = (event) => { 
    event.preventDefault();    
  }     

  //sets state of if the form was submitted.
  const handleAssessmentSubmit = () => {  
    setIsSubmitted(1); 
    //console.log("submitted: "+ isSubmitted);   
 
    var submittedGuess = userGuess.current.value;

    setSubmittedGuess(userGuess.current.value); 
    //console.log("Guess: " + submittedGuess + ", correct answer: " + dataSet[count].capitals);

    submittedGuess = submittedGuess.trim();

    //verify   
    if (submittedGuess.toLocaleLowerCase() == dataSet[count].capitals.toLocaleLowerCase()){
        setPoints(points+1); 
        setEvaluation(1);
        //console.log("2) evaluation was set to: " + evaluation); 
    }; 
    if (submittedGuess.toLocaleLowerCase() !== dataSet[count].capitals.toLocaleLowerCase()){
        setEvaluation(0);
        ////console.log("3) evaluation was set to: " + evaluation); 
    }; 
  } 

  //sets state of if the form was submitted.
  const nextQuestion = () => {
    if (count < 49){ 
        setIsSubmitted(0);
        //console.log("submitted: "+ isSubmitted);

        setCount(count+1);
        //console.log("count: " + count);  
        
        var userGuess = "";
        //console.log("userGuess: "+ userGuess);
    }
  } 
 

  return(
    
    <form onSubmit={handleSubmit}>
      <Row  lg="6">
        <Col lg="6"> 
            <Row  lg="12">
                <Col lg="12">
                    {dataSet[count].id}) What is the Capital of {dataSet[count].state}? 
                </Col>
                <Col lg="12">  
                    {isSubmitted == 0 
                        ?   <label className="input-lable"> 
                                <input className="input-field"   type="text" 
                                    name="userGuess" 
                                    ref={userGuess} 
                                    onChange={handleSubmit}
                                /> 
                            </label> 
                        : ""}  
                    {isSubmitted == 0 
                    ?  <input  className="input-button" type="submit" onClick={handleAssessmentSubmit} />  
                    : "" } 
                    {isSubmitted == 1 && evaluation == 1  ? <><div className="answer">You answered: "<strong>{dataSet[count].capitals}</strong>" </div> <div className="correct">Correct!</div> </> : "" }
                    {isSubmitted == 1 && evaluation == 0  ? <div className="incorrect"><strong>Wrong!</strong><br></br>  You said "{submittedGuess.trim()}"... it's "{dataSet[count].capitals}". </div> : "" }
                </Col>
            </Row> 
        </Col>
        
        <Col lg="6" className="score-area auto left"> 
            <div className="evaluation"> 
                <div className="score">
                    {dataSet[count].id == 50 && isSubmitted == 1 ? "Final " : "" }
                     Score: {points}/{dataSet[count].id} of 50!
                </div>
                {dataSet[count].id < 50 && isSubmitted == 1 ? <button className="next-question" onClick={nextQuestion}>Next</button> : "" } 
                {dataSet[count].id == 50 ?  <div className="end">That's all of them! </div> : "" } 
            </div>
        </Col>
      </Row> 
    </form> 
  );

}



export default Assessment;