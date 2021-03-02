import React, { useContext, useEffect } from 'react';
import ContextActivities from '../context/ContextActivities';

function InProgressList() {
  const { inProgress, handleClickDone, setInProgress } = useContext(ContextActivities);
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
            {/* <button value={ activity }>Cancelar</button> */}
            <button value={ activity } onClick={ handleClickDone } className="btn btn-light">Feito</button>
          </li>
        )) }
      </ul>
  );
}

export default InProgressList;