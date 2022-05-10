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
      console.log(response.data);
      setNotes([response.data]);
    })
    .catch((error) => {
      alert(error.response.data);
    });

    },[]);

    return (
        <div>
         <NavBar/>
         <h2 class="text-center">{localStorage.getItem('user')}'s Notes</h2>
         <SearchBar/>
         <div className="d-flex flex-wrap justify-content-around" style={{width: "80%", marginLeft: "10%"}}>
          
          {/* {notes[0].map((note,index) => (
            <SmallNote color="#543" text={`${note.text}`}/>
          ))} */}

          {/* <SmallNote color="#543" text={`this is a lovely chat`}/>
          <SmallNote color={"#678"} text={`This is a lovely `}/>
          <SmallNote color={"#433"} text={`This is a lovely `}/>
          <SmallNote color={"#822"} text={`This is a lovely `}/>
          <SmallNote color={"#f14"} text={`This is a lovely `}/>
          <SmallNote color={"#911"} text={`This is a lovely `}/>
          <SmallNote color={"#333"} text={`This is a lovely `}/>
          <SmallNote color={"#f05"} text={`This is a lovely `}/> */}
            

            <div>
            <button onClick={()=>{navigate("/anp")}} style={{position:"fixed", bottom:"25px", right:"25px", cursor:"pointer", width: "55px",height:"55px", padding:"0px 0px" ,borderRadius:"50px", fontSize:"30px", textAlign:"center" }} type="button" class="btn btn-dark">+</button>
            </div>
         </div>
        </div>
    )
}