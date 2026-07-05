import Home from "./Home";
import DitherBackground from "./components/DitherBackground";

function App() {
  return (
    <>
      <DitherBackground color="#edef23" density={0.2}/>
      <Home />
    </>);
}

export default App;
