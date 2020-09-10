import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import MicroFrontend from './MicroFrontend';
// import SimpleTable from '../../shared/components/SimpleTable';


import './tailwind.output.css';

const {
  REACT_APP_1: app1,
  REACT_APP_2: app2,
} = process.env;

const App1 = ({ history }) => (
  <MicroFrontend history={history} host={app1} name="App1" />
);
const App2 = ({ history }) => (
  <MicroFrontend history={history} host={app2} name="App2" />
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
      <Route exact path='/' render={props =>
        <React.Fragment>
          <App1/>
          <App2/>
          {/* <SimpleTable /> */}
        </React.Fragment>
      } />
        <Route exact path="/app1" component={App1} />
        <Route exact path="/app2" component={App2} />
      </Switch>
      <AppFooter />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
