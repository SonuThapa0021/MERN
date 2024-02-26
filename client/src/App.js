import React from 'react'
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Contact from './components/Contact';



const App = () => {
  return (
    <>
      <Navbar />
      {/* <Route path="/">
        <Home />
      </Route>

      <Route path="/About">
        <About />
      </Route>

      <Route ath="/Contact">
        <Contact />
      </Route>

      <Route path="/LogIn">
        <LogIn />
      </Route>

      <Route path="/SignUp">
        <SignUp />
      </Route> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App;
