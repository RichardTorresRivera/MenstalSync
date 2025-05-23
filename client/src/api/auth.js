import axios from "./axios";

export const loginRequest = async (user) => axios.post("/login", user);

export const verifyTokenRequest = async () => axios.get("/verify");

export const logoutRequest = async () => axios.post("/logout");

export const registerRequest = async (user) => axios.post("/pacientes", user);

export const notificacionesPacienteRequest = async () =>
  axios.get("/notificaciones_paciente");

export const notificacionesPsicologoRequest = async () =>
  axios.get("/notificaciones_psicologo");
