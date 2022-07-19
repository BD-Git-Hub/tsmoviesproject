import Items from "./Items/Items";

const Genres = () => {
  return (

    <div className="bg-blue-500 h-96 w-full flex flex-row">
      <div className="bg-orange-400 h-96 basis-36">
        <button className="relative top-2/4 text-lg float-left">Left Arrow</button>
      </div>
      <div className="bg-pink-400 h-96 basis-11/12">
        <Items/>
      </div>
      <div className="bg-orange-400 h-96 basis-36">
        <button className="relative top-2/4 text-lg float-right">Right Arrow</button>
      </div>
    </div>

    
  );
};

export default Genres;
