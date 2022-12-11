import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeePage from './pages/EmployeePage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/employee/:name' element={<EmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
