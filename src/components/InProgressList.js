import React, { useContext, useEffect } from 'react';
import ContextActivities from '../context/ContextActivities';

function InProgressList() {
  const {
    inProgress,
    handleClickDone,
    setInProgress,
    handleClickDeleteInProgress
  } = useContext(ContextActivities);

  const inProgressStorage = JSON.parse(localStorage.getItem('inProgress'));

  useEffect(() => {
    if (inProgressStorage) {
      setInProgress(inProgressStorage);
    }
  },[])

  return(
    <ul className="list-container">
        {inProgress.length > 0 && inProgress.map((activity, index) => (
          <li className="item-list" key={index}>
            { activity }
            <div>
              <button
                value={ activity }
                onClick={ handleClickDeleteInProgress }
                className="btn btn-light"
                data-testid={`ipdelete-${activity}`}
              >
                Delete
              </button>
              <button
              value={ activity }
              onClick={ handleClickDone }
              className="btn btn-light"
              data-testid={`done-${activity}`}
            >
              Done
            </button>
            </div>
          </li>
        )) }
      </ul>
  );
}

export default InProgressList;