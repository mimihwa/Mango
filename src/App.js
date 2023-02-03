import './App.css';
import React from "react";
import MainPage from "./components/MainPage";
import {Routes, Route} from 'react-router-dom'


const App=()=> {
    
/* https://ef2d1220-16cb-4c24-9c59-dec8477c92e0.mock.pstmn.io */
   
    return(
      <div className='App'>
        <Routes>
            <Route path='/' element={<MainPage/>}></Route>
        </Routes>
      </div>
    );
}

export default App;
