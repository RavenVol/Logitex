import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Modal from './Modal';
import FormContacts from './FormContacts';
import FormAddress from './FormAddress';
import FormCategories from './FormCategories';
import FormSuccess from './FormSuccess';

import '../styles/css/reset.css';
import '../styles/css/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Modal>
          <Switch>
            <Route path='/' exact component={FormContacts} />
            <Route path='/contacts' exact component={FormContacts} />
            <Route path='/address' exact component={FormAddress} />
            <Route path='/categories' exact component={FormCategories} />
            <Route path='/success' exact component={FormSuccess} />
            <Route path='*' component={FormContacts} />
          </Switch>
        </Modal>
      </div>
    );
  }
}

export default App;
