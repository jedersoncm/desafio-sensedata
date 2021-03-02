import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import TodoList from '../components/TodoList';
import ContextActivities from '../context/ContextActivities';

function Todo() {
  const {
    handleClickSend
  } = useContext(ContextActivities);

  // const handleClick = async() => {
  //   const activity = document.querySelector("#input-activity").value;
  //   await setActivities([...activities , activity]);
  //   localStorage.setItem('activities', JSON.stringify(activities));
   
  //   // console.log(activities);
  // }

  

  return(
    <div className="container-body">
      <Header />
      <NavBar />
      <h1>To Do</h1>
      <form className="input-container">
        <input placeholder="Digite a atividade" id="input-activity" className="form-control"></input>
        <button type='button' onClick={ handleClickSend } className="btn btn-secondary">
          <i class="fas fa-arrow-circle-right"></i>
        </button>
      </form>
      <TodoList />
    </div>
  )
}

export default Todo;