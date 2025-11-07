// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Componentes landing
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutiones from "./components/Solutiones";
import Principles from "./components/Principles";
import NuestroEquipo from "./components/NuestroEquipo";
import ComoTrabajamos from "./components/comoTrabajamos";
import Footer from "./components/Footer";

// Navbar para subrutas
import NavbarRamas from "./components/NavBarRamas";

// Subrutas
import Retail from "./pages/Retail";
import Mobility from "./pages/Mobility";
import Industry from "./pages/Industry";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Solutiones />
              <Principles />
              <ComoTrabajamos />
              <NuestroEquipo />
              <Footer />
            </>
          }
        />

        {/* Subrutas con NavbarRamas */}
        <Route
          path="/retail"
          element={
            <>
              <NavbarRamas />
              <Retail />
            </>
          }
        />
        <Route
          path="/mobility"
          element={
            <>
              <NavbarRamas />
              <Mobility />
            </>
          }
        />
        <Route
          path="/industry"
          element={
            <>
              <NavbarRamas />
              <Industry />
            </>
          }
        />
      </Routes>
    </div>
  );
}
