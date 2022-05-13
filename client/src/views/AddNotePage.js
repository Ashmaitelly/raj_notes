import React,{useState} from "react";
import {Card,Button, FormControl,InputGroup} from 'react-bootstrap';
import NavBar from "../components/NavBar";
import ColorSelector from "../components/ColorSelector";
import { useNavigate } from "react-router-dom";
import  Axios  from "axios";

function AddNotePage({text}){


  const addNewNote = async (e) =>{
    try {
      let response = await Axios.post("http://localhost:3001/notes/create",{title,text: word, author: localStorage.getItem('user')})
      console.log(200, response);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };



  const navigate=useNavigate();

  const [title,setTitle]= useState("");
  const [word,setWord]= useState("");
   text =`` ;
   const [noteColor, setNoteColor] = useState("#fff")

   const getColor = (color) => {
    setNoteColor(color)
}
    return(

<div>
  <NavBar/>
  <Card style={{  height: '1000%' , width: '75%', margin: '0 auto' }}color= {noteColor}>
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


      </Card.Text>

    </Card.Body>
  </Card>

   <div class="d-md-inline ">
      <ul style={{display:"flex",  margin:" 20px 162px 20px 130px", listStyle: "none", justifyContent:"space-between"}}>
        <li>
      <Button variant="primary" onClick={addNewNote}>
              Save
      </Button>
      </li>

      <li>
  <ColorSelector 
  func ={getColor}
  />
  </li>

      <li>
      <Button variant="primary" onClick={()=>{navigate("/home")}}>
              Cancel
      </Button>
      </li>

      
  </ul>
  
  </div>
  
</div>
    )
}

export default AddNotePage;