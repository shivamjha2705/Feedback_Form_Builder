import FormBuilder from "./Components/FormBuilder/FormBuilder";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form-builder" element={<FormBuilder />} />
      </Routes>
    </Router>
  );
};

export default App;
