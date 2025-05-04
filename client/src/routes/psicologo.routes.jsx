import { Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import PrivateRoutes from "./private.routes";

import Citas from "../pages/psicologo/Citas";

const rol = "Psicologo";

export const psicologoRoutes = {
  path: "/psicologo",
  element: <PrivateRoutes requiredRole={rol} />,
  children: [
    {
      element: <NavBar userRol={rol} />,
      children: [
        { index: true, element: <Navigate to="citas" replace /> },
        { path: "citas", element: <Citas /> },
        { path: "citas/:idcita", element: <h1>Diagnostico de cita</h1> },
        { path: "pacientes", element: <h1>Mis pacientes</h1> },
        {
          path: "pacientes/:idpaciente",
          element: <h1>Citas con un paciente</h1>,
        },
        { path: "perfil/editar", element: <h1>Editar Psico</h1> },
      ],
    },
  ],
};
