import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Foods from "./Pages/Foods";
import Facilities from "./Pages/Facilities";
import Booking from "./Pages/Booking";
import Rides from "./Pages/Rides";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Foods" element={<Foods />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Rides" element={<Rides />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
