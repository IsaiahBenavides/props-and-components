import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import dataArr from "./data";
import EmployeeListItem from './components/EmployeeListItem';

const data = dataArr.map((ele, idx) => {
  return (
    <EmployeeListItem key={idx} {...ele} />
  )
})

function App() {
  return (
    <>
      <Homepage>
      </Homepage>
    </>
  );
}

export default App;
