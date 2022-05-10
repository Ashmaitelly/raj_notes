import React,{useState,useEffect} from "react"
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import SmallNote from "../components/SmallNote"
import { useNavigate } from "react-router-dom"
import Axios from 'axios';

export default function NotesPage () {
    const navigate= useNavigate();

    const [notes,setNotes] = useState([]);


    useEffect(()=>{
    Axios.get("http://localhost:3001/notes/")
    .then((response) =>{
     setNotes(response.data);
    })
    .catch((error) => {
      alert("Error getting data");
    });
    
    },[notes]);
    

    return (
        <div>
         <NavBar/>
         <h2 class="text-center">{localStorage.getItem('user')}'s Notes</h2>
         <SearchBar/>
         <div className="d-flex flex-wrap justify-content-around" style={{width: "80%", marginLeft: "10%"}}>
          
          {notes.map((note,index) => (
            <SmallNote key={index} color="#543" text={`${note.text}`}/>
          ))}
            <div>
            <button onClick={()=>{navigate("/anp")}} style={{position:"fixed", bottom:"25px", right:"25px", cursor:"pointer", width: "55px",height:"55px", padding:"0px 0px" ,borderRadius:"50px", fontSize:"30px", textAlign:"center" }} type="button" class="btn btn-dark">+</button>
            </div>
         </div>
        </div>
    )
}