import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import About from "./pages/About";

function App() {
  return (
    <div className="w-full max-h-screen bg-primary-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
