import { Routes, Route } from "react-router-dom";
import Signup from "./Signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      {/* <Route path="contact" element={<Contact/>}/> */}
      {/* <Route path="products" element={<EbeautyPopularPick/>}/> */}
    </Routes>
  );
}

export default App;
