import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contactus from "./pages/ContactUs";
import Navbar from "./pages/Navbar";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contactus />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// react router dom -> bane banaye components -> browser router -> routes -> route
