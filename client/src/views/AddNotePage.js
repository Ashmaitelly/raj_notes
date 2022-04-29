import React,{useState} from "react";
import {Card,Button, FormControl,InputGroup} from 'react-bootstrap';
import Note from "../components/Note";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function AddNotePage({text}){
  const navigate=useNavigate();
  
  const [title,setTitle]= useState("");
  const [word,setWord]= useState("");
   text =`` ;


    return(
<div>
  <NavBar/>
  <Card style={{  height: '1000%' , width: '75%', margin: '0 auto' }}>
    <Card.Body>
    
      <Card.Title><input size="lg" placeholder="insert Title" type="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/></Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Last Modified</Card.Subtitle>
      

      <Card.Text style={{  whiteSpace: "pre-wrap"}}>
      <InputGroup className="mb-3">
    <FormControl
     as="textarea"
      placeholder="insert text"
      aria-label="insert text"
      aria-describedby="basic-addon1"
      value={word}
      onChange={(e)=>{setWord(e.target.value)}}
    />
  </InputGroup>

        {/*<input style={{  whiteSpace: "pre-wrap" ,width:"142vh", height:"50vh"}} placeholder="insert Text" type={text} />*/}
         </Card.Text>
      

    </Card.Body>
  </Card>
      <div class="d-md-inline bg-success"style={{marginLeft: "12.5%"}}>
  <Button style={{marginRight: "1% "}}variant="primary" onClick={()=>{console.log("save")}}>
              Save
  </Button>
  <Button variant="primary" onClick={()=>{navigate("/home")}}>
              Cancel
  </Button>        
</div>
</div>
    )
}

export default AddNotePage;