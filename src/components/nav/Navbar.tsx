const Navbar = () => {
  return (
    <>
    <div className="w-full h-16">
      <div className="inline">
        <a href="#" className="inline-block text-white text-lg m-4">FilmCritic</a>
        <button className="navButton">Genre</button>
        <button className="navButton">Rating</button>
        <input type="text" value="search film" className="text-lg"></input>
      </div>
      <div className="float-right m-2">
      <button className="navButton">Watchlist</button>
      <button className="navButton">Trailers</button>
      <button className="navButton">Ratings</button>
      <button className="navButton">Login</button>
    </div>
    </div>
    
    </>
    
  );
};

export default Navbar;
