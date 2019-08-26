import React from 'react';
import Menu from './components/menu';
import Navbars from './components/navbars'
import Envios from './components/envios'
import './index.css';

function App() {
  return (
    <div className="container">
      <div className= "row">
        <div className="col-md-2">
          <Menu/>
        </div>
        <div className= "col-md-10">
          <Navbars/>
          <Envios/>
        </div>
    </div>
    </div>
  );
}
export default App;
