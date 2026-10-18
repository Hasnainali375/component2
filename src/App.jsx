import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";
function App() {
  return (
    <>
      <Header username={"zeeshan"} />
      <h1>today we will do components</h1>
      <Footer greet={"loveyou"} />
    </>
  );
}

export default App;
