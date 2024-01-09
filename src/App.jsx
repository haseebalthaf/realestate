import { Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Browse from "./pages/browse";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="browse" element={<Browse />}></Route>
    </Routes>
  );
}

export default App;