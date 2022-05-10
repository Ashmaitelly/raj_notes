
import NavBar from "../components/NavBar"
import Note from "../components/Note"
import ColorSelector from "../components/ColorSelector"
import PostComments from "../components/PostComment"
import Comments from "../components/Comments"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function HomeNotePage(){
const navigate=useNavigate();
    return(
    <div>
        <NavBar/>
        <Note />
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
        <ColorSelector/>
            <PostComments />
            <Comments/>
    </div>

    )
}

export default HomeNotePage;