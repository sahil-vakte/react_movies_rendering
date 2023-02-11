import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="login" element={<Login/>}/>
      <Route path="homepage" element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
