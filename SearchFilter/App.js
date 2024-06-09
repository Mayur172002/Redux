import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchFilter from './Search/SearchFilter';

function App() {
  return (
    <div>
      <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<SearchFilter/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App