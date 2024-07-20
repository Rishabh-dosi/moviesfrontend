import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Trailer from "./components/Trailer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trailer/:TrailerId" element={<Trailer />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
