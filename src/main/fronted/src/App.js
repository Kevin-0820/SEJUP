import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from "./components/Login";
import Home from "./components/Home";
import Archivos from "./components/Archivos";

function App() {
  return (
    <GoogleOAuthProvider clientId="su_api">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/archivos" element={<Archivos />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
