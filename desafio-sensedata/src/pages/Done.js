import React, { useContext, useEffect } from 'react';
import DoneList from '../components/DoneList';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

function Done() {
 
  return(
    <div className="container-body">
      <Header />
      <NavBar />
      <h1>Done</h1>
      <DoneList />
    </div>
  )
}

export default Done;