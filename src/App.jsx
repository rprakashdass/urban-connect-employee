// Styles
import './App.css'

// Authentication and Authorization -
// https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

import { Route, Routes } from "react-router-dom";
import { EmpLogin, EmpSignup, EmpHome } from "../Pages/";

function App() {
  return (
    <div className="App">
      <Routes>

        {/* Employee */}
        <Route path="/login" element={<EmpLogin/>} />
        <Route path="/signup" element={<EmpSignup />} />
        <Route path="/" element={<EmpHome />}/>

      </Routes>
    </div>
  );
}

export default App;