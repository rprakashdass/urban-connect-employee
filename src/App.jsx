// Styles
import './App.css'

// Authentication and Authorization -
// https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

import { Route, Routes } from "react-router-dom";
import { Login, Signup, Home } from "./Pages/";


function Index(){
  return (
    <h1><center>Redirect to "/e/"</center></h1>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>

        {/* Employee */}
        <Route path="/e/login" element={<Login/>} />
        <Route path="/e/signup" element={<Signup />} />
        <Route path="/e/" element={<Home />}/>
        <Route path="/" element={<Index/>} />

      </Routes>
    </div>
  );
}

export default App;