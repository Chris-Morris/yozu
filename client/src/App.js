import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import Components
import ButtonAppBar from './components/materialUiNavbar/materialUIAppNavbar';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';

function App() {
  return (
    <Router className="App">
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
