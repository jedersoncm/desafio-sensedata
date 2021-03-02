import React, { useContext } from 'react';
import ContextActivities from '../context/ContextActivities';

function InProgressList() {
  const { inProgress, handleClickDone } = useContext(ContextActivities);
  // console.log(inProgress);

  return(
    <ul>
        {inProgress.length > 0 && inProgress.map((activity, index) => (
          <li key={index}>
            { activity }
            <button value={ activity }>Cancelar</button>
            <button value={ activity } onClick={ handleClickDone }>Feito</button>
          </li>
        )) }
      </ul>
  );
}

export default InProgressList;