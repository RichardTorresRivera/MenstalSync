import { Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import PrivateRoutes from "./private.routes";
import Psicologos from "../pages/admin/Psicologos";

const rol = "Administrador";

export const adminRoutes = {
  path: "/admin",
  element: <PrivateRoutes requiredRole={rol} />,
  children: [
    {
      element: <NavBar userRol={rol} />,
      children: [
        { index: true, element: <Navigate to="psicologos" replace /> },
        { path: "psicologos", element: <Psicologos /> },
        { path: "psicologos/registrar", element: <h1>Registrar Psicologo</h1> },
        { path: "psicologos/editar", element: <h1>Editar Psico</h1> },
      ],
    },
  ],
};
