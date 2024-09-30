import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home.js';
import Services from './Components/pages/Services.js';
import Products from './Components/pages/Products.js';
import SignUp from './Components/pages/SignUp.js';




function App() {
  return (
   <>
   <Router>
     <Navbar />
     <Routes>
      <Route path='/' exact component ={Home} />
      <Route path='/services' exact component ={Services} />
      <Route path='/products' exact component ={Products} />
      <Route path='/sign-up' exact component ={SignUp} />
     </Routes>
     </Router>

  </>
   
  );
}

export default App;
