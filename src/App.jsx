import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Success from "./pages/Success";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer className="max-w-56 mx-auto" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/success" element={<Success />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
