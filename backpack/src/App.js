import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Perks from './containers/Perks/Perks';
import Test from './components/Test/Test';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 

      </header>
      <Switch>
        <Route path="/Perks" component={Perks} />
        <Route path="/" exact component={Test} />
      </Switch>
    </div>
  );
}

export default App;
