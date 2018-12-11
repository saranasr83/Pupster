import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
// import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
// import About from "pages/About";
// import Discover from "pages/Discover";
// import Search from "pages/Search";




const App = ()=> (
  <Router>
    <div>
      <Navbar/>
      {/* <Wrapper> */}
        {/* <Route exact path="/" component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Safety Tips" component={About} />
        <Route exact path="/Discover" component={Discover} />
        <Route exact path="/Search" component={Search} /> */}
      {/* </Wrapper> */}
      <Footer/>
    </div>
  </Router>
)

export default App;
