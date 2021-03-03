import React, { useContext } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import TodoList from '../components/TodoList';
import ContextActivities from '../context/ContextActivities';

function Todo() {
  const {
    handleClickSend
  } = useContext(ContextActivities);

  return(
    <div className="container-body">
      <Header />
      <NavBar />
      <h2>
        <i class="fas fa-clipboard-list"></i>
        {" To Do"}
      </h2>
      <form className="input-container">
        <input
          placeholder="Digite a atividade"
          id="input-activity"
          className="form-control"
          data-testid="input-activity"
        >
        </input>
        <button
          type='submit'
          onClick={ handleClickSend }
          className="btn btn-secondary"
          data-testid="btn-submit"
        >
          <i class="fas fa-arrow-circle-right"></i>
        </button>
      </form>
      <TodoList />
    </div>
  )
}

export default Todo;