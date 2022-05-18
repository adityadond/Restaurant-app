
import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Contact from "./page/contact/Contact";
import MenuDetail from "./page/menuDetails/MenuDetail";
import AboutUs from "./page/aboutPage/AboutUs";
import Menu from "./page/menuPage/Menu";
import HomePage from "./page/homePage/HomePage";

function App() {
  return (
    <div className="App">
<Router>
      <Navbar />
      <Routes>
      <Route path="/menu-detail" element={<MenuDetail/>}  />
      <Route path="/menu" element={<Menu/>}  />
      <Route path="/about-us" element={<AboutUs/>}  />
      <Route path="/" element={<HomePage/>}  />
      <Route path="/contact-us" element={<Contact/>}  />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
