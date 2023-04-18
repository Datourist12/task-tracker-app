import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TaskLayout from "./pages/TaskLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="tasks" element={<TaskLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
