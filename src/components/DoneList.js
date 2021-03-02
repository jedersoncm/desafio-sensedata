import React, { useContext, useEffect } from 'react';
import ContextActivities from '../context/ContextActivities';

function DoneList() {
  const { done, handleClickDeleteDone, setDone } = useContext(ContextActivities);
  const doneStorage = JSON.parse(localStorage.getItem('done'));

  useEffect(() => {
    if (doneStorage) {
      setDone(doneStorage);
    }
  },[])

  return(
    <ul className="list-container">
        {done.length > 0 && done.map((activity, index) => (
          <li className="item-list" key={index}>
            { activity }
            <button value={ activity } onClick={ handleClickDeleteDone } className="btn btn-light">Deletar</button>
          </li>
        )) }
      </ul>
  );
}

export default DoneList;