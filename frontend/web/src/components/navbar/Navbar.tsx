import "./Navbar.css";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          GameLog
        </a>

        <nav className="navbar-links">
          <a href="/">Inicio</a>
          <a href="/">Explorar</a>
          <a href="/">Listas</a>
        </nav>

        <button className="navbar-login">
          Iniciar sesión
        </button>
      </div>
    </header>
  );
}