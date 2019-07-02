import React from 'react';

import Template from './templates/Template';
import { BrowserRouter as Router } from "react-router-dom"

function App() {

  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} >
      <Template />

    </Router>
  );
}

export default App;
