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
        <Route path="/e/login" element={<EmpLogin/>} />
        <Route path="/e/signup" element={<EmpSignup />} />
        <Route path="/e/" element={<EmpHome />}/>

      </Routes>
    </div>
  );
}

export default App;