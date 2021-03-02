import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Todo from './pages/Todo';
import InProgress from './pages/InProgress';
import Done from './pages/Done';

import './App.css';


function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Todo } />
        <Route exact path="/in-progress" component={ InProgress } />
        <Route exact path="/done" component={ Done } />
      </Switch>
    </Provider>
  );
}

export default App;
