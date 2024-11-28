import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./Home";
import logo from "./assets/logodubairlines.png";
import './App.css';


function App() {
  return (

      <>
        {/*<header id="header" className="outer-content-container">*/}
        {/*  <div className="inner-content-container-header">*/}

        {/*    <LogoBig*/}
        {/*        img={logo}*/}
        {/*        imgTitle="logo"*/}
        {/*    />*/}

        {/*    <Nav/>*/}

        {/*  </div>*/}

        {/*</header>*/}

        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>

        {/*<footer id="footer" className="outer-content-container">*/}
        {/*  <div className="inner-content-container">*/}
        {/*    dubairlines.com &copy; 2025*/}
        {/*  </div>*/}
        {/*</footer>*/}

      </>

  );
}

export default App;
