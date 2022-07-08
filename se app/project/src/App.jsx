import React from 'react';
import { BrowserRouter as Router, Routes, Route , Redirect } from 'react-router-dom';
import Home from './pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login.jsx'
import Signup from'./pages/singup.jsx'
import Navbar from './pages/Navbar.jsx'
import Pricing from './pages/pricing.js';
import Events from './pages/Events.jsx';
import Host from './pages/Host.jsx'
import Contact from './pages/Contact.jsx';
import Hosting from './pages/Hosting.jsx';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/event" element={<Events/>} />
        <Route path="/hosting" element={<Hosting/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
  	  </Routes>
    </Router>
    </>
  );
};

export default App;