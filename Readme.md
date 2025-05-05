# MentalSync

## Usuarios de prueba

| Rol       | Correo            | Pass |
| --------- | ----------------- | ---- |
| Admin     | admin@test.com    | test |
| Paciente  | paciente@test.com | test |
| Psicologo | psico@test.com    | test |

### Cómo levantar el proyecto localmente

1. Primero instala todas las dependencias ejecutando el comando:
   ```bash
   npm run install-all
   ```

1. Luego, dirígete a la carpeta principal del código fuente. Puedes hacerlo ejecutando en la misma terminal abierta, el siguiente comando:

   ```bash
   cd ..
   ```

   En la carpeta principal del código fuente, ejecuta en la terminal el siguiente comando:

   ```bash
   npm run start
   ```

   Con ello, se ejecutará el servidor local para el backend. Recuerda tener configurado el archivo _.env_

   Si quieres ejecutar el servidor y que este se actualice automaticamente con cada cambio realizado, ejecuta el siguiente comando en lugar del anterior:

   ```bash
   npm run dev
   ```

1. En la carpeta client, a la que puedes desplazarte otra vez, con el comando:

   ```bash
   cd client
   ```

   Ejecuta el siguiente comando en la terminal:

   ```bash
   npm run dev
   ```

   Con ello, se ejecutará el servidor local para el frontend.

1. Dirígete al al servidor local ingresando el siguiente link en tu navegador: http://localhost:5173/

