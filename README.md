# Project Management API

Backend REST API para gestión de proyectos y tareas.
Permite a los usuarios registrarse, autenticarse mediante JWT y administrar proyectos con sus respectivas tareas.

Este proyecto fue desarrollado como práctica de arquitectura backend usando Node.js, Express y PostgreSQL.

---

# Características

* Registro de usuarios
* Autenticación con JWT
* CRUD de proyectos
* CRUD de tareas
* Validación de datos
* Paginación de resultados
* Arquitectura MVC
* Documentación de API con Swagger

---

# Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* JWT Authentication
* express-validator
* Swagger (documentación de API)

---

# Arquitectura del proyecto

```
src
 ├── config
 │    database.js
 │    swagger.js
 │
 ├── controllers
 │    authController.js
 │    projectController.js
 │    taskController.js
 │
 ├── middleware
 │    authMiddleware.js
 │    validationMiddleware.js
 │
 ├── models
 │    userModel.js
 │    projectModel.js
 │    taskModel.js
 │
 ├── routes
 │    authRoutes.js
 │    projectRoutes.js
 │    taskRoutes.js
 │
 └── app.js
```

Esta estructura sigue el patrón **MVC (Model-View-Controller)** para separar responsabilidades y facilitar el mantenimiento del código.

---

# Instalación

Clonar el repositorio:

```
git clone https://github.com/Lesf0215X/project-management-api.git
```

Entrar al proyecto:

```
cd project-management-api
```

Instalar dependencias:

```
npm install
```

---

# Configuración de variables de entorno

Crear un archivo `.env` en la raíz del proyecto.

Ejemplo:

```
PORT=3000
JWT_SECRET=tu_clave_secreta
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=projectdb
DB_PASSWORD=tu_password
DB_PORT=5432
```

---

# Ejecutar el proyecto

Modo desarrollo:

```
npm run dev
```

Modo producción:

```
npm start
```

---

# Documentación de la API

Una vez ejecutado el servidor, la documentación interactiva estará disponible en:

```
http://localhost:3000/api-docs
```

Aquí se pueden visualizar y probar todos los endpoints disponibles.

---

# Ejemplo de endpoints

## Registro de usuario

POST /api/auth/register

```
{
  "email": "usuario@test.com",
  "password": "123456"
}
```

---

## Login

POST /api/auth/login

```
{
  "email": "usuario@test.com",
  "password": "123456"
}
```

---

## Crear proyecto

POST /api/projects

Header requerido:

```
Authorization: Bearer TOKEN
```

Body:

```
{
  "name": "Mi proyecto",
  "description": "Descripción del proyecto"
}
```

---

# Autor

Luis E.S.F
