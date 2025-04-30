import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contactus from "./pages/ContactUs";
import Navbar from "./pages/Navbar";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import DynamicRoute from "./pages/DynamicRoute";
import UseEffectHook from "./pages/UseEffect";
import Api from "./api/api";

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
            <Route path="/effect" element={<UseEffectHook />} />
            <Route path="/api" element={<Api />} />
            <Route path="/user/:id" element={<DynamicRoute />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// react router dom -> bane banaye components -> browser router -> routes -> route
