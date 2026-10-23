import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkup" element={<p>Website Check-up coming soon</p>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/pricing" element={<p>Pricing coming soon</p>} />
        <Route path="/about" element={<p>About coming soon</p>} />
        <Route path="/contact" element={<p>Contact coming soon</p>} />
        <Route path="/reviews" element={<p>Leave a review coming soon</p>} />
      </Routes>
    </>
  );
}
