import React from 'react';
import Homepage from './Pages/homepage/homepage.component';
import {Route} from 'react-router-dom';
import './App.css';


const HatsPage= (props) =>(
  console.log(props),
    <div>
      <h1>HATS PAGE</h1>
    </div>
);

function App() {
  return (
    <div>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/hats' component={HatsPage}></Route>
    </div>
  );
}

export default App;
