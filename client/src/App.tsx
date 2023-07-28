import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./components/pages/auth/SignUp";
import Login from "./components/pages/auth/Login";
import Main from "./components/pages/main/Main";
import Friends from "./components/pages/main/Friends";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<SignUp />} />
          {/* <Route path="/friends" element={<Friends />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
