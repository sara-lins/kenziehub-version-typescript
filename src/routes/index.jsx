import { Routes, Route, Navigate, Link } from "react-router-dom";
import { schemaLogin } from "../validator/schema.js";
import { schemaRegister } from "../validator/schema.js";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";

function HomeTest() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}

const RoutesMain = () => {
  <Routes>
    <Route path="/" element={<HomeTest />} />
    {/* <Route path="/register" element={<Register schema={schemaRegister} />} />
    <Route path="/dashboard" element={<Home />} />
    <Route path="*" element={<Navigate replace to="/login" />} /> */}
  </Routes>;
};

export default RoutesMain;
