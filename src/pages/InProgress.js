import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import InProgressList from '../components/InProgressList';
import NavBar from '../components/NavBar';

function InProgress() {
 
  return(
    <div className="container-body">
      <Header />
      <NavBar />
      <h2>
        <i class="fas fa-hourglass-half"></i>
        {" In Progress"}
      </h2>
      <InProgressList />
    </div>
  )
}

export default InProgress;
