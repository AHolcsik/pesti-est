// import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import { Rootstate } from "../features/store";
import Happening from "./components/Happening";
import Map from "./components/Map";

function App() {
  const happening = useSelector((state: Rootstate) => state.happening.name);

  console.log(happening);

  return (
    <>
      <div></div>
      <h1>Pesti Est</h1>
      <h3>{happening}</h3>
      <Happening />
      <Map />
    </>
  );
}

export default App;
