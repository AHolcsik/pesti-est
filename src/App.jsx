// import "./App.css";
import { useSelector } from "react-redux";
import { Rootstate } from "../features/store";
import Happening from "./components/Happening";

function App() {
  const happening = useSelector((state) => state.happening.name);

  console.log(happening);

  return (
    <>
      <div></div>
      <h1>Pesti Est</h1>
      <h3>{happening}</h3>
      <Happening />
    </>
  );
}

export default App;
