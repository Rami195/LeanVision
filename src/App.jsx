
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutiones";
import Principles from "./components/Principles";
import ComoTrabajamos from "./components/comoTrabajamos";
import Exito from "./components/Exito";
import NuestroEquipo from "./components/NuestroEquipo";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Solutions />
      <Principles/>
      <ComoTrabajamos/>
      <Exito/>
      <NuestroEquipo/>

    </div>
  );
}

export default App;
