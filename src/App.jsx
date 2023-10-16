import Footer from "./components/Footer";
import { NavBar, Filter } from "./components/NavBar";
import Cardlist from "./components/CardList";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Filter />
      <Cardlist />
      <Footer />
    </div>
  );
}

export default App;
