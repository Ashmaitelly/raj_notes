import React,{useState,useEffect} from "react";
import NavBar from "../components/NavBar"
import Note from "../components/Note"
import Comments from "../components/Comments";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import  Axios from "axios";
import { NotesContext } from "./NotesPage";

function DeletedNotePage(){

    const navigate=useNavigate();
    //note state object
    const [note,setNote] = useState({});
    //url parameters
    const [searchParams] = useSearchParams();
    //trying context

    useEffect(()=>{
    Axios.get(`http://localhost:3001/deleted/${searchParams.get("id")}`)
    .then((response) =>{
     setNote(response.data);
    })
    .catch((error) => {
      alert("Error getting data");
    });
    
    },[searchParams]);

    return(
    <div>
        <NavBar/>
        <NotesContext.Provider value={note}>
        <Note
            color = {"#538"}
            text = {"hello homies bi t7ine"}
        />
        </NotesContext.Provider>
        <div class="d-md-inline"style={{marginLeft: "12.5%"}}>
        <Button variant="primary" style={{marginRight:"1%"}} onClick={()=>{navigate("/deleted")}}>
            Restore
        </Button>
        <Button variant="primary" onClick={()=>{navigate("/deleted")}}>
            Delete
        </Button>
        </div>
        <Comments/>
    </div>

    )
}
export default DeletedNotePage