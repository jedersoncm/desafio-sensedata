import React from 'react';
import { useHistory } from 'react-router-dom';

function NavBar() {

  const history = useHistory()

  const handleClick = ({target}) => {
    history.push(target.value);
  }

  return (
    <nav className="nav-bar">
      <button
        className="btn btn-primary"
        value={`/`}
        onClick={ handleClick }
        data-testid="todo-btn"
      >
        <i class="fas fa-clipboard-list"></i>
        To Do
      </button>
      <button
        className="btn btn-primary"
        value={`/in-progress`}
        onClick={ handleClick }
        data-testid="inprogress-btn"
      >
        <i class="fas fa-hourglass-half"></i>
        In Progress
      </button>
      <button
        className="btn btn-primary"
        value={`/done`}
        onClick={ handleClick }
        data-testid="done-btn"
      >
        <i class="far fa-check-square"></i>
        Done
      </button>
    </nav>
  );
}

export default NavBar;