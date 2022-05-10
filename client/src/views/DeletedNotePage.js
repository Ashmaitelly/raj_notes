
import NavBar from "../components/NavBar"
import Note from "../components/Note"
import Comments from "../components/Comments";
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap";

function DeletedNotePage(){
 const navigate = useNavigate();
    return(
    <div>
        <NavBar/>
        {/* <Note/> */}
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