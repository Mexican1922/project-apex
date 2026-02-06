import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Home />
    </div>
  );
}
