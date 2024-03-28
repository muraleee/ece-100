import React, {useState} from 'react'
import { Box, Button } from '@mui/material';
import './Table.css';
import { Router,Route } from "react-router-dom";
function Form(props) {
    const [inputValue, setInputValue] = useState('');
    const [value, getValue] = useState("")
  
  
    /**
     * Event handler for input change.
     * Updates the input value state with the new value entered by the user.
     * @param {object} event - The event object.
     */
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
  
    }
    
    const onClick = async(e) => {

      console.log("Button was clicked")
  
      const requestOptions = {
          method: "GET"
      }
  
  
  
          await fetch("/checkIn/", {
              method: "POST",
              headers: {"Content-Type" : "application/json"},
              //mode: "cors",
              body: JSON.stringify({'qty':inputValue, 'projectid': props.projectid})
          })
  
          await fetch("/checkIn/", requestOptions)
          .then(response => response.json())
          .then(data => getValue(data.checkIn))
          .then(alert(value+" hardware checked in"));
      
  
      // try {
    //     const response = await fetch('/checkIn/'); // Replace with your actual API endpoint
    //     const data = await response.json();
    //     alert(data); // Process and use the retrieved data
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }
      }
    return(
      <div class= "info2">
        <form>
          <label>    

            <input type="number" min="0" value={inputValue} onChange={handleInputChange}/>
            <Button  onClick={onClick} style={{ color: 'black' , backgroundColor:"gainsboro"}}>
                            Check in
                        </Button>
            <Button style={{ color: 'black' , backgroundColor:"gainsboro"}}>
                            Check out
            </Button>                        
       
          
          </label>

        </form>
        
      </div>
    )
  }

function Table() {
    return (
        <Box class = "table"
            sx={{ p: 2, border: '1px dashed grey' }}>
                <div class = "info" >
                    <h2> Project Name 1</h2>
                    <p> list of authorized users</p>
                    <div class = "forms" >
                          <h3> HWSet1: 50/100</h3>
                          <h3> HWSet2: 0/100</h3>
                    </div>
                    <div class = "forms" >
                        <Form  projectid= "1"/>
                        <Form  title= "enter qty"/>
                    </div>
                    
                    <div>
                    <Button style={{ color: 'black' , backgroundColor:"gainsboro"}}>
                      Join
                   </Button>
                    </div>
                </div>
          
        </Box>
       
      
    );
}
function Table2() {
    return (
        <Box class = "table"
            sx={{ p: 2, border: '1px dashed grey' }}>
                <div class = "info" >
                    <h2> Project Name 2</h2>
                    <p> list of authorized users</p>
                    <div class = "forms" >
                          <h3> HWSet1: 50/100</h3>
                          <h3> HWSet2: 0/100</h3>
                    </div>
                    <div class = "forms" >
                        <Form  title= "enter qty"/>
                        <Form  title= "enter qty"/>
                    </div>
                    <div>
                    <Button style={{ color: 'black' , backgroundColor:"gainsboro"}}>
                      Leave
                   </Button> 
                   </div>
                </div>
          
        </Box>
       
      
    );
}
function Table3() {
    return (
        <Box class = "table"
            sx={{ p: 2, border: '1px dashed grey' }}>
                <div class = "info" >
                    <h2> Project Name 3</h2>
                    <p> list of authorized users</p>
                    <div class = "forms" >
                          <h3> HWSet1: 50/100</h3>
                          <h3> HWSet2: 0/100</h3>
                    </div>
                    <div class = "forms" >
                        <Form  title= "enter qty"/>
                        <Form  title= "enter qty"/>
                    </div>
                   <div>
                    <Button style={{ color: 'black' , backgroundColor:"gainsboro"}}>
                      Join
                   </Button> 
                   </div>
                </div>
          
        </Box>
       
      
    );
}

const Tables = () => {
    return (
      <div>
         <Table />
         <Table2 />
         <Table3 />
      </div>
    );
  };
export default Tables;