import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import SmallNote from "../components/SmallNote"
import { useNavigate } from "react-router-dom"

export default function NotesPage () {
    const navigate= useNavigate();
    return (
        <div>
         <NavBar/>
         <h2 class="text-center">Your NOTES</h2>
         <SearchBar/>
         <div className="d-flex flex-wrap justify-content-around" style={{width: "80%", marginLeft: "10%"}}>
          
             
            <SmallNote onClick={()=>{navigate("/hnp")} }color="#543" text={`this is a lovely chat`}/>
            <SmallNote color={"#678"} text={`This is a lovely `}/>
            <SmallNote color={"#433"} text={`This is a lovely `}/>
            <SmallNote color={"#822"} text={`This is a lovely `}/>
            <SmallNote color={"#f14"} text={`This is a lovely `}/>
            <SmallNote color={"#911"} text={`This is a lovely `}/>
            <SmallNote color={"#333"} text={`This is a lovely `}/>
            <SmallNote color={"#f05"} text={`This is a lovely life if u have a lovely wife where she can take care of u like her own child and gives u all the love and u give her all the protection and security and love all at the same time, life is about sharing and caring, giving and taking.x`}/>

            <div>
            <button onClick={()=>{navigate("/anp")}} style={{position:"fixed", bottom:"25px", right:"25px", cursor:"pointer", width: "55px",height:"55px", padding:"0px 0px" ,borderRadius:"50px", fontSize:"30px", textAlign:"center" }} type="button" class="btn btn-dark">+</button>
            </div>
         </div>
        </div>
    )
}