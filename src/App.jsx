import React from "react";
import Footer from "./components/FooterDiv/Footer";
import Jobs from "./components/JobDiv/Jobs";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/SearchDiv/Search";
import Value from "./components/ValueDiv/Value";
import img from "./assets/imagecover.avif";
const App = () => {
  return (
    <div className="">
      <div className="m-auto w-[85%]  ">
        <NavBar />
        <Search />
        <Jobs />
        <Value />
        <Footer />
      </div>
    </div>
  );
};

export default App;
