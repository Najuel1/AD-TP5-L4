import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">BlobProj</Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/about">AboutUs</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">ContactUs</Link>
            </li>
            
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-decoration-none"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lista
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/extra">Extra</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/report">Reportar Error</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}