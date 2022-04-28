import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Account from './views/Account';
import NotesPage from './views/NotesPage'
import SharedPage from './views/SharedPage';
import DeletedPage from './views/DeletedPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Account />} />
        <Route path='/home' element={<NotesPage />}/>
        <Route path='/shared' element={<SharedPage/>}/>
        <Route path='/deleted' element={<DeletedPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
