import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Navbar} from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="container pt-4">
        <switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'}  component={About} />
        </switch>
      </div>
    </BrowserRouter>
    
  );
}
 
export default App;
