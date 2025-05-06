# MentalSync

### Cómo levantar el proyecto localmente

1. Primero instala todas las dependencias ejecutando el comando:
   
   ```bash
   npm run install-all
   ```

1. Luego, para poder correr el servidor, ejecuta el siguiento comando en la raíz del proyecto:

   ```bash
   npm run dev
   ```

1. Una vez hecho esto inicia otra terminal para ejecutar el cliente y dejas que el terminal del servidor siga ejecutandose:
   En la nueva terminal nos dirigiendonos a la carpeta 'client' con el comando:

   ```bash
   cd client
   ```

   Ejecuta el siguiente comando en la terminal:

   ```bash
   npm run dev
   ```

   Con ello, se ejecutará la vista del cliente.

1. Dirígete al al servidor local ingresando el siguiente link en tu navegador: http://localhost:5173/

### Usuarios de prueba
   Para probar el sistema, usa alguna de estas cuentas con las 3 vistas por tipo de cliente:

| Rol       | Correo            | Pass |
| --------- | ----------------- | ---- |
| Admin     | admin@test.com    | test |
| Paciente  | paciente@test.com | test |
| Psicologo | psico@test.com    | test |
