import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContextActivities from './ContextActivities';

function Provider({ children }) {
  const [activities, setActivities] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const location = useLocation().pathname;

  const handleClickDoing = async ({target}) => {
    const activityDone = target.value;
    console.log(activityDone);
    const index = activities.indexOf(activityDone);
    const updateActivities = activities;
    updateActivities.splice(index, 1);
    await setInProgress([...inProgress, activityDone]);
    // console.log(inProgress);
    // console.log(updateActivities);
    // console.log(activities);
    await setActivities(updateActivities);
    // console.log(activityDone, index);
  }

  const handleClickDone = ({target}) => {
    const activityDone = target.value;
    const index = inProgress.indexOf(activityDone);
    const updateInProgress = inProgress;
    updateInProgress.splice(index, 1);
    setDone([...done, activityDone])
    setInProgress(updateInProgress);
    console.log("ANTES: " + done);
  }

  const handleClickDeleteDone = ({target}) => {
    const activityDone = target.value;
    const index = done.indexOf(activityDone);
    const updateDone = done;
    updateDone.splice(index, 1);
    // console.log("ANTES: " + done);
    // console.log("DEPOIS1 " + updateDone);
    setDone(updateDone);
    setInProgress(inProgress);
    console.log("DEPOIS2:" + done);
  }

  // const handleClickEdit = ({target}) => {
  //   const activityDone = target.value;
  //   const index = inProgress.indexOf(activityDone);
    
  //   if (location === '/in-progress') {
  //     const updateActivities = inProgress;
  //   } else if (location ==='/done') {
  //     const updateActivities = done;
  //   } else {
  //     const updateActivities = activities;
  //   }
  // }

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
  }

  return(
    <ContextActivities.Provider value={ contextValue }>
      {children}
    </ContextActivities.Provider>
  );
}

export default Provider;
