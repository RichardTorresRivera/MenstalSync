import { useRoutes } from "react-router-dom";
import Login from "../pages/general/Login";
import Signup from "../pages/general/Signup";
import ErrorPage from "../pages/ErrorPage";

import { pacienteRoutes } from "./paciente.routes";
import { adminRoutes } from "./admin.routes";
import { psicologoRoutes } from "./psicologo.routes";

function IndexRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    pacienteRoutes,
    psicologoRoutes,
    adminRoutes,
    {
      path: "/403",
      element: <ErrorPage code={403} message={"No autorizado"} />,
    },
    { path: "*", element: <ErrorPage code={404} message={"No encontrado"} /> },
  ]);
  return routes;
}

export default IndexRoutes;
