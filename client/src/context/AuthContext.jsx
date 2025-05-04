import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  loginRequest,
  registerRequest,
  verifyTokenRequest,
  logoutRequest,
} from "../api/auth";
import Loading from "../pages/Loading";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  // Verificar token
  useEffect(() => {
    async function checkLogin() {
      try {
        const res = await verifyTokenRequest();
        console.log("Verificar token:", res);
        if (!res.data) return setUser(null);
        setUser(res.data);
      } catch (error) {
        setUser(null);
      } finally {
        setIsReady(true);
      }
    }
    checkLogin();
  }, []);

  // Registrar paciente
  const registerUser = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log("Respuesta de registro: ", res);
      setUser(res.data);
    } catch (error) {
      console.log("Error de registro: ", error);
    }
  };

  // Logear usuario
  const loginUser = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log("Respuesta de inicio de sesion: ", res);
      setUser(res.data);
      toast.success("Inicio de sesion exitoso!");
      switch (res.data.rol) {
        case "Paciente":
          navigate("/paciente");
          break;
        case "Psicologo":
          navigate("/psicologo");
          break;
        case "Administrador":
          navigate("/admin");
          break;
        default:
          navigate("/404");
          break;
      }
    } catch (error) {
      console.log("Error de inicio de sesion:", error.response.data.message);
      toast.warning(error.response.data.message);
    }
  };

  // Verificar si se inicio sesion
  const isLoggedIn = () => {
    return !!user;
  };

  // Salir de la sesion
  const logout = async () => {
    try {
      await logoutRequest();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setUser(null);
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        loginUser,
        user,
        logout,
        isLoggedIn,
      }}
    >
      {isReady ? children : <Loading />}
    </AuthContext.Provider>
  );
};

export default AuthContext;
