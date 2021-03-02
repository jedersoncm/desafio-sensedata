import React, { useContext } from 'react';
import ContextActivities from '../context/ContextActivities';

function TodoList() {
  const { activities, handleClickDoing } = useContext(ContextActivities);

  return(
    <ul className="list-container">
        {activities.length > 0 && activities.map((activity, index) => (
          <li key={index} className="item-list">
            { activity }
            <button
              onClick={ handleClickDoing }
              value={ activity }
              className="btn btn-light"
            >
              <i class="fas fa-play-circle"></i>
            </button>
          </li>
        )) }
    </ul>
  );
}

export default TodoList;