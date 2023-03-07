import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Priv from "./components/privacy-policy/Priv";
import Loading from "./components/loading/Loading";
import { Routes, Route } from "react-router-dom";
import SmoothScrollbar from "smooth-scrollbar";
import { MdClose } from "react-icons/md";

function App() {
  const [isShown, setIsShown] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleClick = (event) => {
    // 👇️ toggle visibility
    setIsShown((current) => !current);
  };

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div className="app-con">
          {/*<div
            className="message"
            style={{ display: isShown ? "flex" : "none" }}
          >
            <h6>.</h6>
            <h4>Get 50% Off Your First Order</h4>
            <MdClose onClick={handleClick} style={{ cursor: "pointer" }} />
      </div>*/}
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="privacypolicy" element={<Priv />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
