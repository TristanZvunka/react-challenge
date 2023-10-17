import Footer from "./components/Footer";
import { NavBar, Filter } from "./components/NavBar";
import Cardlist from "./components/CardList";
import { useState } from "react";



function App() {
  const [ cat, setCat]= useState("tous");
  console.log(cat);

  return (
    <div className="app">
      <NavBar />
      <Filter setCat={setCat}/>
      <Cardlist cat={cat}/>
      <Footer />
    </div>
  );
}

export default App;
