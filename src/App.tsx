import React from "react";
import Navbar from "./components/nav/Navbar";
import Genres from "./components/indexComponents/Genres";
import Index from "./components/indexComponents/Index";
import Trailers from "./components/indexComponents/Trailers";
import Footer from "./components/indexComponents/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Index/>
      <Genres/>
      <Trailers/>
      <Footer/>
      

    </>
      
    
  );
}

export default App;
