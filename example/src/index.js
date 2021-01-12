import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Overview from './Overview';
import Basic from './Basic';
import CustomNode from './CustomNode';
import Stress from './Stress';
import Interaction from './Interaction';
import Empty from './Empty';
import Edges from './Edges';
import Validation from './Validation';
import Provider from './Provider';
import Hidden from './Hidden';
import EdgeTypes from './EdgeTypes';
import CustomConnectionLine from './CustomConnectionLine';
import NodeTypeChange from './NodeTypeChange';
import UpdatableEdge from './UpdatableEdge';
import UpdateNode from './UpdateNode';
import SaveRestore from './SaveRestore';
import DragNDrop from './DragNDrop';
import Layout from './Layouting';
import SwitchFlows from './Switch';
import DatabowlBasicFlow from './DatabowlBasicFlow';

import './index.css';

const routes = [
  {
    path: '/databowl-basic-flow',
    component: DatabowlBasicFlow,
  },
];

const Header = withRouter(({ history, location }) => {
  const onChange = (event) => history.push(event.target.value);

  return (
    <header>
      <a className="logo" href="https://github.com/wbkd/react-flow">
        React Flow Dev
      </a>
      <select defaultValue={location.pathname} onChange={onChange}>
        {routes.map((route) => (
          <option value={route.path} key={route.path}>
            {route.path === '/' ? 'overview' : route.path.substr(1, route.path.length)}
          </option>
        ))}
      </select>
    </header>
  );
});

ReactDOM.render(
  <Router forceRefresh={true}>
    <Header />
    <Switch>
      {routes.map((route) => (
        <Route exact path={route.path} render={() => <route.component />} key={route.path} />
      ))}
    </Switch>
  </Router>,
  document.getElementById('root')
);
