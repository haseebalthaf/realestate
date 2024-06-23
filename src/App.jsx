import { Routes, Route } from "react-router-dom";
import Home from "./pages/page-home";
import Browse from "./pages/page-browse";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="browse" element={<Browse />}></Route>
    </Routes>
  );
}

export default App;