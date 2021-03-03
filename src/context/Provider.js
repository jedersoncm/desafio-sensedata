import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import ContextActivities from './ContextActivities';

function Provider({ children }) {
  const [activities, setActivities] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const handleClickSend = async() => {
    const activity = document.querySelector("#input-activity").value;
    await setActivities([...activities , activity]);
    localStorage.setItem('activities', JSON.stringify([...activities , activity]));
  }

  const handleClickDoing = ({ target }) => {
    const activityDone = target.value;
    const index = activities.indexOf(activityDone);
    const updateActivities = activities;

    updateActivities.splice(index, 1);

    setInProgress([...inProgress, activityDone]);
    setActivities(updateActivities);
    
    localStorage.setItem('activities', JSON.stringify(updateActivities));
    localStorage.setItem('inProgress', JSON.stringify([...inProgress, activityDone]));
  }

  const handleClickDone = ({target}) => {
    const activityDone = target.value;
    const index = inProgress.indexOf(activityDone);
    const updateInProgress = inProgress;

    updateInProgress.splice(index, 1);

    setDone([...done, activityDone])
    setInProgress(updateInProgress);

    localStorage.setItem('inProgress', JSON.stringify(updateInProgress));
    localStorage.setItem('done', JSON.stringify([...done, activityDone]));
  }

  const handleClickDeleteActivities = ({target}) => {
    const activityDelete = target.value;
    const index = inProgress.indexOf(activityDelete);
    const updateActivities = activities;

    updateActivities.splice(index, 1);

    setActivities([...updateActivities]);
    localStorage.setItem('activities', JSON.stringify(updateActivities));
  }

  const handleClickDeleteDone = ({target}) => {
    const activityDone = target.value;
    const index = done.indexOf(activityDone);
    const updateDone = done;

    updateDone.splice(index, 1);

    setDone([...updateDone]);
    localStorage.setItem('done', JSON.stringify(updateDone));
  }

  const handleClickDeleteInProgress = ({target}) => {
    const inProgressDelete = target.value;
    const index = inProgress.indexOf(inProgressDelete);
    const updateInProgress = inProgress;

    updateInProgress.splice(index, 1);

    setInProgress([...updateInProgress]);
    localStorage.setItem('inProgress', JSON.stringify(updateInProgress));
  }


  const contextValue = {
    activities,
    setActivities,
    inProgress,
    setInProgress,
    done,
    setDone,
    handleClickDoing,
    handleClickDone,
    handleClickDeleteDone,
    handleClickSend,
    handleClickDeleteInProgress,
    handleClickDeleteActivities
  }

  return(
    <ContextActivities.Provider value={ contextValue }>
      {children}
    </ContextActivities.Provider>
  );
}

export default Provider;
