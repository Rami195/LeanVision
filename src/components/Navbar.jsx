
const Navbar = () => {
  return (
    <nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[85%] 
      flex items-center justify-between px-8 py-3 
      bg-white/30 backdrop-blur-md shadow-lg rounded-2xl border border-white/20 
      z-50"
    >
      <h1 className="text-lg font-semibold text-gray-900">Lean Vision</h1>

      <ul className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
        <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
        <li><a href="#filosofia" className="hover:text-blue-600">Filosofía Lean</a></li>
        <li><a href="#industrias" className="hover:text-blue-600">Industrias</a></li>
        <li><a href="#clientes" className="hover:text-blue-600">Clientes</a></li>
        <li><a href="#casos" className="hover:text-blue-600">Casos de éxito</a></li>
        <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
        <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
      </ul>

      <button
        className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 
        text-white px-4 py-2 rounded-full font-semibold 
        hover:opacity-90 transition"
      >
        Solicita una demo
      </button>
    </nav>
  );
};

export default Navbar;
