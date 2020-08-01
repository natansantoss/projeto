import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import View1 from './pages/View1'
import View2 from './pages/View2'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" exact component={View1} />
      <Route path="/post/:id" component={View2} />
    </BrowserRouter>
  );
}

export default App;
