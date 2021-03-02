import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

function NavBar() {

  const history = useHistory()

  const handleClick = ({target}) => {
    history.push(target.value);
  }

  return (
    <nav className="nav-bar">
      <button className="btn btn-primary" value={`/`} onClick={ handleClick }>
        <i class="fas fa-clipboard-list"></i>
        To Do
      </button>
      <button className="btn btn-primary" value={`/in-progress`} onClick={ handleClick }>
        <i class="fas fa-hourglass-half"></i>
        In Progress
      </button>
      <button className="btn btn-primary" value={`/done`} onClick={ handleClick }>
        <i class="far fa-check-square"></i>
        Done
      </button>
    </nav>
  );
}

export default NavBar;