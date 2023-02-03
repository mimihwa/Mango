import './App.css';
import React from "react";
import MainPage from "./components/MainPage";
import { Routes, Route} from 'react-router-dom'
import ProductPage from "./components/ProductPage"
import UploadPage from "./components/UploadPage"


const App=()=> {
    
/* https://ef2d1220-16cb-4c24-9c59-dec8477c92e0.mock.pstmn.io */
   
    return(
      <div className='App'>
        <Routes>
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/ProductPage/:id' element={<ProductPage/>}></Route>
            <Route path='/UploadPage' element={<UploadPage/>}></Route>
        </Routes>
      </div>
    );
}

export default App;
