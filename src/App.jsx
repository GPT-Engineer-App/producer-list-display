import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Producers from "./pages/Producers.jsx";
import Messaging from "./pages/Messaging.jsx";
import Payment from "./pages/Payment.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/producers" element={<Producers />} />
        <Route exact path="/messaging" element={<Messaging />} />
        <Route exact path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;