import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Addictional from "./components/Addictional";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import AnimatedDiv from "./AnimatedDiv";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />

      <AboutUs />

      <Menu />
      <Addictional />
      <Footer />
    </div>
  );
}

export default App;
