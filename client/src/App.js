import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Account from "./views/Account";
import NotesPage from "./views/NotesPage";
import SharedPage from "./views/SharedPage";
import DeletedPage from "./views/DeletedPage";
import Note from "./components/Note";
import HomeNotePage from "./views/HomeNotePage";
import SharedNotePage from "./views/SharedNotePage";
import DeletedNotePage from "./views/DeletedNotePage";
import AddNotePage from "./views/AddNotePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";

export const SearchContext = createContext();
export const NotesContext = createContext();
export const ColorContext = createContext();
export const CommentsContext = createContext();
export const PostContext= createContext();
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/home" element={<NotesPage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/deleted" element={<DeletedPage />} />
        <Route path="/note" element={<Note />} />
        <Route path="/hnp" element={<HomeNotePage />} />
        <Route path="/snp" element={<SharedNotePage />} />
        <Route path="/dnp" element={<DeletedNotePage />} />
        <Route path="/anp" element={<AddNotePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
