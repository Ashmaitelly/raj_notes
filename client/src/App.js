import "./App.css";
import React, { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Account from "./views/Account";
import NotesPage from "./views/NotesPage";
import SharedPage from "./views/SharedPage";
import DeletedPage from "./views/DeletedPage";
import Note from "./components/Note";
import NotePage from "./views/NotePage";
import SharedNotePage from "./views/SharedNotePage";
import DeletedNotePage from "./views/DeletedNotePage";
import AddNotePage from "./views/AddNotePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const SearchContext = createContext();
export const NotesContext = createContext();
export const ColorContext = createContext();
export const CommentsContext = createContext();
export const PostContext = createContext();
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("");

  const getUser = () => {
    return user;
  };

  const updateUser = (userString) => {
    setUser(userString);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/home" element={<NotesPage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/deleted" element={<DeletedPage />} />
        <Route path="/note" element={<Note />} />
        <Route path="/hnp" element={<NotePage />} />
        <Route path="/snp" element={<SharedNotePage />} />
        <Route path="/dnp" element={<DeletedNotePage />} />
        <Route path="/anp" element={<AddNotePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
