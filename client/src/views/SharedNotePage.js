import NavBar from "../components/NavBar"
import Note from "../components/Note";
import PostComments from "../components/PostComment";
import Comments from "../components/Comments";



function SharedNotePage(){

    return(

        <div>
            <NavBar />
            <Note color={"#543"}/>
            <PostComments />
            <Comments/>
        </div>

    )
}

export default SharedNotePage;
