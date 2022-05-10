import React,{useState,useEffect,createContext} from "react"
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import SmallNote from "../components/SmallNote"
import { useNavigate } from "react-router-dom"
import Axios from 'axios';

export const NotesContext = createContext();

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
    
    },[]);
    

    return (
        <div>
         <NavBar/>
         <h2 class="text-center">{localStorage.getItem('user')}'s Notes</h2>
         <SearchBar/>
         <div className="d-flex flex-wrap justify-content-around" style={{width: "80%", marginLeft: "10%"}}>
          
          {notes.map((note,index) => (
            <NotesContext.Provider value={note}>
              <SmallNote key={index} url="hnp" text={`${note.text}`}/>
            </NotesContext.Provider>
          ))}
            <div>
            <button onClick={()=>{navigate("/anp")}} style={{position:"fixed", bottom:"25px", right:"25px", cursor:"pointer", width: "55px",height:"55px", padding:"0px 0px" ,borderRadius:"50px", fontSize:"30px", textAlign:"center" }} type="button" class="btn btn-dark">+</button>
            </div>
         </div>
        </div>
    )
}