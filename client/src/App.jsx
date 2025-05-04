import { AuthProvider } from "./context/AuthContext";
import Rutas from "./routes/index.routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Rutas />
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
