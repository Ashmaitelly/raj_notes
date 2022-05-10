import {React, useState,useEffect} from "react"
import NavBar from "../components/NavBar"
import Note from "../components/Note"
import ColorSelector from "../components/ColorSelector"
import PostComments from "../components/PostComment"
import Comments from "../components/Comments"
import { Button } from "react-bootstrap"
import { useNavigate, useSearchParams } from "react-router-dom"
import Axios from "axios";
import { NotesContext } from "./NotesPage"

function HomeNotePage(){

    const navigate=useNavigate();
    //note state object
    const [note,setNote] = useState({});
    //url parameters
    const [searchParams, setSearchParams] = useSearchParams();
    //trying context

    const [noteColor, setNoteColor] = useState("#fff")

    useEffect(()=>{
    Axios.get(`http://localhost:3001/notes/${searchParams.get("id")}`)
    .then((response) =>{
     setNote(response.data);
    })
    .catch((error) => {
      alert("Error getting data");
    });
    
    },[]);

    const getColor = (color) => {
        setNoteColor(color)
    }

    return(
    <div>
        <NavBar/>
        <NotesContext.Provider value={note}>
        <Note
            color = {noteColor}
            text = {"F#$% You Man"}
        />
        </NotesContext.Provider>
        <div class="d-md-inline"style={{marginLeft: "12.5%"}}>
        <Button variant="primary" style={{marginRight:"1%"}} onClick={()=>{navigate("/anp")}}>
            Edit
        </Button>
        <Button variant="primary" style={{marginRight:"1%"}} onClick={()=>{navigate("/home")}}>
            Remove
        </Button>
        <Button variant="primary" onClick={()=>{navigate("/home")}}>
            Share with
        </Button>
        </div>
        <ColorSelector
            func = {getColor}
        />
            <PostComments />
            <Comments/>
    </div>

    )
}

export default HomeNotePage;