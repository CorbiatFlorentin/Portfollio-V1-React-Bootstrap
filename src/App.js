import React from "react";
import "./App.css";
import Sidebar from "./component/sidebar/Sidebar";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Resume from "./component/resume/Resume";
import Potfollio from "./component/potfollio/Potfollio";
import Contact from "./component/contact/Contact";



const App = () => {
  return (
    <>
    <Sidebar />
     <main className="main"></main>
      <Home />
      <About />
      <Resume />
      <Potfollio />
      <Contact />

    </>
  )
}

export default App 