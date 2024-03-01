import About from "./Components/About/About";
import Expertise from "./Components/Expertise/Expertise";
import Gallery from "./Components/Gallery/Gallery";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Expertise></Expertise>
      <Gallery></Gallery>
      <Contact></Contact>
    </div>
  );
}

export default App;
