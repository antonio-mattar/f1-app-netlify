import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import F1Arabic from './components/F1 Arabic'
import F1English from './components/F1 English'

function App() {
  return (
    
    <Router>
        
        <Routes>
          <Route exact path="/" element={<F1English name='English'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic'/>}/>
        </Routes>
      
    </Router>
    
    
  );
}

export default App;
