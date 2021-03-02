import React, { useContext } from 'react';
import ContextActivities from '../context/ContextActivities';

function TodoList() {
  const { activities, handleClickDoing } = useContext(ContextActivities);

  return(
    <ul>
        {activities.length > 0 && activities.map((activity, index) => (
          <li key={index}>
            { activity }
            <button onClick={ handleClickDoing } value={ activity }>Iniciar</button>
          </li>
        )) }
      </ul>
  );
}

export default TodoList;