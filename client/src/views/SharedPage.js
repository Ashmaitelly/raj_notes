import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import SmallNote from "../components/SmallNote"


export default function SharedPage () {
    return (
        <div>
         <NavBar/>
            <h2>Shared NOTES</h2>
            <SearchBar/>
            <SmallNote color={"#f50"} text={`This is a lovely life if u have a lovely wife where she can take care of u like her own child and gives u all the love and u give her all the protection and security and love all at the same time, life is about sharing and caring, giving and taking.x`}/>
            <SmallNote color={"#f05"} text={`This is a lovely life if u have a lovely wife where she can take care of u like her own child and gives u all the love and u give her all the protection and security and love all at the same time, life is about sharing and caring, giving and taking.x`}/>
        </div>
    )
}