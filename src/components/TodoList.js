import React, { useContext, useEffect } from 'react';
import ContextActivities from '../context/ContextActivities';

function TodoList() {
  const {
    activities,
    handleClickDoing,
    setActivities,
    handleClickDeleteActivities
  } = useContext(ContextActivities);
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
            <div>
              <button
                value={ activity }
                onClick={ handleClickDeleteActivities }
                className="btn btn-light"
                data-testid={`delete-${activity}`}
              >
                Delete
              </button>
              <button
                onClick={ handleClickDoing }
                value={ activity }
                className="btn btn-light"
                data-testid={`inProgress-${activity}`}
              >
                Start
              </button>
            </div>
          </li>
        )) }
    </ul>
  );
}

export default TodoList;