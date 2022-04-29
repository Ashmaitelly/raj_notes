import NavBar from "../components/NavBar"
import Note from "../components/Note";
import PostComments from "../components/PostComment";



function SharedNotePage(){

    return(

        <div>
            <NavBar />
            <Note />
            <PostComments />
        </div>

    )
}

export default SharedNotePage;
