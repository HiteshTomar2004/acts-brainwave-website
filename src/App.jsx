import Home from "./Home";
import DitherBackground from "./components/DitherBackground";

function App() {
  return (
    <>
      <DitherBackground color="#BDBDBD" density={0.25}/>
      <Home />
    </>);
}

export default App;
