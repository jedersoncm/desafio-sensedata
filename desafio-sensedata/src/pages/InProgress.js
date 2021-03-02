import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import InProgressList from '../components/InProgressList';
import NavBar from '../components/NavBar';

function InProgress() {
 
  return(
    <div className="container-body">
      <Header />
      <NavBar />
      <h1>In Progress</h1>
      {/* <input placeholder="Digite a atividade" id="input-activity"></input>
      <button type='button' onClick={ handleClick }>Enviar</button> */}
      <InProgressList />
    </div>
  )
}

export default InProgress;
