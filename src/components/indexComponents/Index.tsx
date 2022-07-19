import Navbar from "../nav/Navbar";

const Index = () => {
  return (
    <div className="bg-red-800 h-screen relative">
      <Navbar />
      <div className="bg-blue-600 h-80 w-80 absolute bottom-20 left-20 text-center">
        <p className="text-7xl m-4">TITLE</p>
        <p className="text-5xl m-4">Rating</p>
        <p className="text-4xl m-4">Description</p>
        <button className="bg-red-200">button when clicked scrolls content down.</button>
      </div>
    </div>
  );
};

export default Index;
