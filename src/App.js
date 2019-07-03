import React from 'react';

import Template from './templates/Template';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history} >
      <Template history={history}/>

    </Router>
  );
}

export default App;
