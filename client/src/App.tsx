import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import SignUp from "./components/pages/auth/SignUp";
import Login from "./components/pages/auth/Login";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/login" element={<Login />}/>
        
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
