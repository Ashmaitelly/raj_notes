import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Account from './views/Account';
import NotesPage from './views/NotesPage'
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Account />} />
        <Route path='/home' element={<NotesPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;



//<div className="App">
//<h2 className="title">R A J NOTES</h2>
//<Account />
//</div>