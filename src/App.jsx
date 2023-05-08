import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Priv from "./components/privacy-policy/Priv";
import Loading from "./components/loading/Loading";
import Contact from "./components/contact/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import SmoothScrollbar from "smooth-scrollbar";
import { MdClose } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import T404 from "./components/t404/T404.jsx";

function App() {
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    setPrevPath(location.pathname);
  }, [location.pathname]);
  const [isShown, setIsShown] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="App">
      <div className="app-con">
        <div className="blur"></div>
        {/*<div
            className="message"
            style={{ display: isShown ? "flex" : "none" }}
          >
            <h6>.</h6>
            <h4>Get 50% Off Your First Order</h4>
            <MdClose onClick={handleClick} style={{ cursor: "pointer" }} />
      </div>*/}
        <Nav />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="privacypolicy" element={<Priv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<T404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
