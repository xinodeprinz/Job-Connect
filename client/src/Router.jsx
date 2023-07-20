import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

const Router = () => {
  // AuthRoute example: /dashboard
  const user = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const isAuth = user || token ? true : false;

  const Protected = ({ element, isAuthRoute = true }) => {
    if (isAuth && !isAuthRoute) {
      return <Navigate to={"/dashboard"} />;
    } else if (!isAuth && isAuthRoute) {
      return <Navigate to={"/login"} />;
    } else {
      return element;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Routes */}
        <Route
          path="/register"
          element={<Protected element={<Register />} isAuthRoute={false} />}
        />
        <Route
          path="/login"
          element={<Protected element={<Login />} isAuthRoute={false} />}
        />
        <Route
          path="/dashboard"
          element={<Protected element={<Dashboard />} />}
        />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
