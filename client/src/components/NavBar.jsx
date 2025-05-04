import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar({ userRol }) {
  const { logout } = useAuth();

  const linksByRole = {
    Paciente: [
      { to: "/paciente/citas", label: "Mis citas" },
      { to: "/paciente/psicologos", label: "Buscar Psicologos" },
    ],
    Psicologo: [
      { to: "/psicologo/citas", label: "Mis citas" },
      { to: "/psicologo/pacientes", label: "Mis pacientes" },
    ],
    Administrador: [{ to: "/admin/psicologos", label: "Buscar Psicologos" }],
  };

  const userLinks = linksByRole[userRol];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">MentalSync</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* Enlaces especificos del rol */}
              {userLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className="nav-link">
                  {link.label}
                </NavLink>
              ))}
            </div>
            {/* Contenedor para el logout alineado a la derecha */}
            <div className="ms-auto">
              <i
                to="/"
                onClick={() => logout()}
                className="nav-link text-danger"
              >
                Logout
              </i>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NavBar;
