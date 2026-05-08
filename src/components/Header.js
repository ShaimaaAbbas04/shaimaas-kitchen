import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-md container">
        <NavLink to="/" className="logo navbar-brand">
          Shaimaa's Kitchen
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="nav-links ms-auto">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/reservations">Reservations</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
