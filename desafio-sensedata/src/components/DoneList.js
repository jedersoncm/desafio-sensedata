import React, { useContext } from 'react';
import ContextActivities from '../context/ContextActivities';

function DoneList() {
  const { done, handleClickDeleteDone } = useContext(ContextActivities);

  return(
    <ul>
        {done.length > 0 && done.map((activity, index) => (
          <li key={index}>
            { activity }
            {/* <button value={ activity } onClick={ handleClickDeleteDone }>Deletar</button> */}
          </li>
        )) }
      </ul>
  );
}

export default DoneList;