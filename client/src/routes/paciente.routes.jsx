import { Navigate } from "react-router-dom";
import Citas from "../pages/paciente/Citas";
import NavBar from "../components/NavBar";
import PrivateRoutes from "./private.routes";

const rol = "Paciente";

export const pacienteRoutes = {
  path: "/paciente",
  element: <PrivateRoutes requiredRole={rol} />,
  children: [
    {
      element: <NavBar userRol={rol} />,
      children: [
        { index: true, element: <Navigate to="citas" replace /> },
        { path: "citas", element: <Citas /> },
        { path: "citas/:idcita", element: <h1>Diagnostico de Cita</h1> },
        { path: "psicologos", element: <h1>Psicologos</h1> },
        {
          path: "psicologos/:idpsicologo/reservar-cita",
          element: <h1>Reservar cita</h1>,
        },
        { path: "perfil/editar", element: <h1>Editar Paciente</h1> },
      ],
    },
  ],
};
