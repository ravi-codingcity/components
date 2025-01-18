import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Dummy components for routing example
import Accordion from "./Accordion/Accordion";
import Home from "./Home";
import Alerts from "./Alerts/Alerts";
import Btn from "./Btn/Btn";
import Card from "./Card/Card";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Forms from "./Forms/Forms";
import Gallery from "./Gallery/Gallery";
import Input from "./Input/Input";
import Blog_card from "./Blog_card/Blog_card";
// Add other pages similarly...

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="flex-1 ">
          <Routes>
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/btn" element={<Btn />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/card" element={<Card />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/" element={<Home />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/input" element={<Input />} />
            <Route path="/blog_card" element={<Blog_card />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
