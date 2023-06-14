import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<App />} />
    </Routes>
  );
};

export default Root;
