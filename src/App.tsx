import React from "react";
import Navbar from "./components/nav/Navbar";
import Genres from "./components/indexComponents/Genres";
import Index from "./components/indexComponents/Index";
import Trailers from "./components/indexComponents/Trailers";
import Footer from "./components/indexComponents/Footer";
import Ratings from "./components/indexComponents/Ratings";

function App() {
  return (
    <>
      <Navbar/>
      <Index/>
      <Genres/>
      <Trailers/>
      <Ratings/>
      <Footer/>
      

    </>
      
    
  );
}

export default App;
