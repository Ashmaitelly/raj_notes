import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import SmallNote from "../components/SmallNote"


export default function DeletedPage () {
    return (
        <div>
         <NavBar/>
         <h2 class="text-center">Deleted NOTES</h2>
         <SearchBar/>
         <div className="d-flex flex-wrap justify-content-around" style={{width: "80%", marginLeft: "10%"}}>
            <SmallNote color={"#f50"} text={`This is a lovely life if u have a lovely wife where she can take care of u like her own child and gives u all the love and u give her all the protection and security and love all at the same time, life is about sharing and caring, giving and taking.x`}/>
            <SmallNote color={"#911"} text={`This is a lovely life if we know hot to relate the small note to the note page`}/>
            <SmallNote color={"#f05"} text={`This is a lovely life if u have a lovely wife where she can take care of u like her own child and gives u all the love and u give her all the protection and security and love all at the same time, life is about sharing and caring, giving and taking.x`}/>
            </div>
        </div>
    )
}