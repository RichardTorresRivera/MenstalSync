import logoMental from "../../../assets/logo_mentalsync.png";
import { BotonAccion } from "../../principales";
import styles from "./inicio.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function FormInicioSesion({ onSubmit, register, errors, loading }) {
  return (
    <div className="col-6">
      <h2 className={`text-center mb-4 ${styles.subtitle}`}>Iniciar sesión</h2>
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
              className={`form-control  ${errors.correo ? "is-invalid" : ""}`}
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
              <Link to="/crear-cuenta" className="ms-2">
                <b>Cree una</b>
              </Link>
            </label>
          </div>
          <div className="col-12 text-center">
            <BotonAccion
              nombre={loading ? "Ingresando" : "Ingresar"}
              disabled={loading}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export function Inicio() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
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
    <div className={`container-fluid ${styles.containerFluid}`}>
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-6 text-center">
          <img src={logoMental} alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>MentalSync</h1>
        </div>
        <FormInicioSesion
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          loading={loading}
        />
      </div>
    </div>
  );
}
