import React, { useContext, useEffect } from 'react';
import ContextActivities from '../context/ContextActivities';

function TodoList() {
  const { activities, handleClickDoing, setActivities } = useContext(ContextActivities);
  const activitiesStorage = JSON.parse(localStorage.getItem('activities'));

  useEffect(() => {
    if (activitiesStorage) {
      setActivities(activitiesStorage);
    }
  },[])

  return(
    <ul className="list-container">
        {activities.length > 0 && activities.map((activity, index) => (
          <li key={index} className="item-list">
            { activity }
            <div value={ activity }>
            <button
              onClick={ handleClickDoing }
              value={ activity }
              className="btn btn-light"
            >
              Iniciar tarefa
            </button>
            </div>
          </li>
        )) }
    </ul>
  );
}

export default TodoList;