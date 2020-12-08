import React from "react";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VunueNfo from "./components/VenueNfo";
import Highlight from "./components/Highlights";
import "./resources/styles.css";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div style={{ height: "1500px" }}>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venuenfo">
        <VunueNfo />
      </Element>
      <Element name="highlight">
        <Highlight />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
