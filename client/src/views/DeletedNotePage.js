
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
        <Note/>
        <Button variant="primary" style={{marginRight:"1%"}} onClick={()=>{navigate("/home")}}>
            Restore
        </Button>
        <Button variant="primary" onClick={()=>{navigate("/deleted")}}>
            Delete
        </Button>
        <Comments/>
    </div>

    )
}
export default DeletedNotePage