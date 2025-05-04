import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes({ requiredRole }) {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn()) return <Navigate to="/" replace />;

  if (user.rol !== requiredRole) return <Navigate to="/403" replace />;

  return <Outlet />;
}
