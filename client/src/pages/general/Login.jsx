import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoMental from "../../assets/logo_mentalsync.png";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await loginUser(data);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className={`container-fluid`}>
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-6 text-center">
          <img src={logoMental} alt="Logo" />
          <h1>MentalSync</h1>
        </div>
        <div className="col-6">
          <h2 className={`text-center mb-4`}>Iniciar sesión</h2>
          <form onSubmit={onSubmit}>
            <fieldset
              disabled={loading}
              className="row g-3 d-flex flex-column align-items-center"
            >
              <div className="col-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className={`form-control  ${
                    errors.correo ? "is-invalid" : ""
                  }`}
                  id="inputEmail4"
                  {...register("correo", { required: true })}
                />
                {errors.correo && (
                  <p className="invalid-feedback">Correo es requerido</p>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.contrasenia ? "is-invalid" : ""
                  }`}
                  id="inputPassword4"
                  {...register("contrasenia", { required: true })}
                />
                {errors.contrasenia && (
                  <p className="invalid-feedback">Constraseña es requerida</p>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="inputPassword4" className="form-label">
                  ¿No tiene una cuenta?
                  <Link to="/signup" className="ms-2">
                    <b>Cree una</b>
                  </Link>
                </label>
              </div>
              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Ingresando" : "Ingresar"}
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
