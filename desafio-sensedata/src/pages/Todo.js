import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import TodoList from '../components/TodoList';
import ContextActivities from '../context/ContextActivities';

function Todo() {
  const {
    activities,
    setActivities,
  } = useContext(ContextActivities);

  const handleClick = async() => {
    const activity = document.querySelector("#input-activity").value;
    await setActivities([...activities , activity]);
   
    console.log(activities);
  }

  

  return(
    <div className="container-body">
      <Header />
      <NavBar />
      <h1>To Do</h1>
      <input placeholder="Digite a atividade" id="input-activity"></input>
      <button type='button' onClick={ handleClick }>Enviar</button>
      <TodoList />
    </div>
  )
}

export default Todo;