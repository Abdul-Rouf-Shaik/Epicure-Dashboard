import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MachineDetails from "./pages/MachineDetails";
import Login from "./pages/Login";
import useAuth from "./hooks/useAuth"; // Import the useAuth hook
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditDispenser from "./components/EditDispenser";

export default function App() {
  const { isAuthenticated, login, logout } = useAuth(); // Use the hook

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/machines/:machineId/dispensers/:dispenserId/edit" element={<EditDispenser />} />
          <Route path="/machines/:machineId" element={<MachineDetails />} />
          <Route path="/login" element={<Login onLogin={login} />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}
