import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";

const RoutesMain = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard/:user_id" element={<Home />} />
    <Route path="*" element={<Navigate replace to="/login" />} />
  </Routes>
);

export default RoutesMain;
