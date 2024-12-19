import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Tutorials from './components/Tutorials';
import Activities from './components/Activities';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  return (

    <Router>

      <div className="App">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />

      </div>

    </Router>
    
  );
}

export default App;
