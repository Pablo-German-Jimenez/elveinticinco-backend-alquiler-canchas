# ⚽ EL Veinticinco – Backend

El **backend el Veintinco                                                                                                                                                                                                ** provee la API REST que soporta la plataforma, gestionando usuarios, productos, alquiler de canchas y recursos multimedia.  
Está diseñado para ser consumido por el frontend en React, manteniendo una arquitectura clara, escalable y segura.

---

## 📝 ¿De qué se trata?

El backend de **Cancheros** se encarga de:

- Gestión de usuarios (registro, login y autenticación).
- Administración de productos del e-commerce.
- Manejo de canchas y alquileres/turnos.
- Persistencia de datos en base de datos.
- Almacenamiento de imágenes en la nube.

Funciona como el núcleo lógico del proyecto, centralizando reglas de negocio y comunicación con servicios externos.

---

## 🚀 Funcionalidades

- API RESTful con endpoints organizados por recursos.
- Autenticación de usuarios.
- CRUD completo de productos.
- CRUD de canchas y alquileres.
- Subida y gestión de imágenes.
- Validaciones y manejo de errores.
- Conexión a base de datos en la nube.

---
## 📅 Reservas y Turnos (/api/reservas)Las canchas disponibles actualmente son: 'Cancha 1' y 'Cancha 2'
----------------------------------------------------------------------------------------
- Método | Endpoint              |Descripción                             |🔐 JWT    |
- GET    | /api/reservas         | Obtener historial de todos los turnos  |Sí        |
- POST   | /api/reservas         | Reservar un turno (Cancha 1 o 2)       |Sí        |
- PUT    | /api/reservas/:id     |Modificar fecha, hora o estado del turno|Sí        | 
- DELETE | /api/reservas/:id     |Cancelar y eliminar una reserva         |Sí        |

---

## 📬 Documentación de la API (Postman)

👉 **[Link Público a la Documentación en Postman](https://documenter.getpostman.com/view/48943028/2sBXVkAUL1)**

### Configuración de Entorno
Para testear localmente, configura las siguientes variables en tu entorno de Postman:
- `base_url`: `http://localhost:{{port}}`
- `port`: `3001`
- `token`: *(Se autocompleta al hacer login)*

Los endpoints protegidos requieren el header:  
`Authorization: Bearer {{token}}`

---

## 👤 Usuarios (`/api/usuarios`)

### Registrar usuario
POST {{base_url}}/api/usuarios/registro

Body (JSON):
{
  "nombre": "Juan Pérez",
  "email": "juan@mail.com",
  "password": "Password123!",
  "telefono": "3811234567"
}

---

### Login
POST {{base_url}}/api/usuarios/login

Body (JSON):
{
  "email": "juan@mail.com",
  "password": "Password123!"
}

Respuesta:
{
  "uid": "id_usuario",
  "nombre": "Juan Pérez",
  "email": "juan@mail.com",
  "rol": "usuario",
  "token": "jwt_token"
}

---

### Listar usuarios 🔐
GET {{base_url}}/api/usuarios

---

### Editar usuario 🔐
PUT {{base_url}}/api/usuarios/:id

Body (JSON):
{
  "nombre": "Juan Actualizado",
  "email": "juan@mail.com",
  "telefono": "3819999999",
  "password": "NuevaPassword123!"
}

---

### Eliminar usuario 🔐
DELETE {{base_url}}/api/usuarios/:id

---

## 🛒 Productos (`/api/productos`)

### Obtener productos
GET {{base_url}}/api/productos

---

### Crear producto 🔐
POST {{base_url}}/api/productos

Body (form-data):
nombre: Camiseta Boca  
descripcion: Camiseta oficial temporada 2025  
precio: 25000  
talles: S,M,L  
categoria: hombre  
imagen: archivo  

---

### Editar producto 🔐
PUT {{base_url}}/api/productos/:id

Body (form-data):
nombre: Camiseta Boca Actualizada  
precio: 27000  
talles: M,L  
categoria: hombre  
imagen: archivo (opcional)

---

### Eliminar producto 🔐
DELETE {{base_url}}/api/productos/:id

---

## 📅 Reservas (`/api/reservas`)

### Obtener reservas
GET {{base_url}}/api/reservas

---

### Crear reserva
POST {{base_url}}/api/reservas

Body (JSON):
{
  "usuario": "Juan Pérez",
  "telefono": "3811234567",
  "cancha": "Cancha 1",
  "fecha": "2025-12-20",
  "horario": "18:00"
}

---

### Editar reserva
PUT {{base_url}}/api/reservas/:id

Body (JSON):
{
  "cancha": "Cancha 2",
  "horario": "19:00",
  "estado": "confirmado"
}

---

### Eliminar reserva
DELETE {{base_url}}/api/reservas/:id

---

## 📦 Colección de Postman

La colección incluye:
- Variables de entorno
- Autenticación JWT
- Requests con JSON y form-data
- Ejemplos de respuestas
- Endpoints protegidos y públicos

Importar la colección en Postman y configurar las variables del entorno antes de usarla.

---

## 🛠️ Tecnologías Utilizadas  

![Node.js](https://img.shields.io/badge/Node.js-18-6A0DAD?logo=node.js&logoColor=white&style=for-the-badge)  
![Express](https://img.shields.io/badge/Express-4-6A0DAD?logo=express&logoColor=white&style=for-the-badge)  
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-6A0DAD?logo=mongodb&logoColor=white&style=for-the-badge)  
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-6A0DAD?logo=mongoose&logoColor=white&style=for-the-badge)  
![JWT](https://img.shields.io/badge/JWT-Auth-6A0DAD?logo=jsonwebtokens&logoColor=white&style=for-the-badge)  
![Cloudinary](https://img.shields.io/badge/Cloudinary-Images-6A0DAD?logo=cloudinary&logoColor=white&style=for-the-badge)

---

## 🔗 Enlaces Útiles  


![Vercel](https://img.shields.io/badge/Vercel-Deploy-00BFA6?logo=render&logoColor=white&style=for-the-badge)  
→ (https://elveinticinco-backend-alquiler-canc.vercel.app/))

---

## 📌 Cómo ejecutar el proyecto en local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TaliCabana/cancherosback.git

# 2. Ingresar al proyecto
cd cancherosback

# 3. Instalar dependencias
npm install

# 4. Crear archivo .env
# Variables sugeridas:
# PORT=3000
# MONGODB_URI=tu_uri_de_mongodb
# JWT_SECRET=tu_clave_secreta
# CLOUDINARY_CLOUD_NAME=xxxx
# CLOUDINARY_API_KEY=xxxx
# CLOUDINARY_API_SECRET=xxxx

# 5. Ejecutar servidor
npm run dev
```
---

✨ Author
Created by Pablo Germán Jiménez
Design inspired by 💥 hip-hop vibes from Bboy Linkin

###### [Access to profile GitHub](https://github.com/Pablo-German-Jimenez)💻
###### [Access to profile Linkedin](https://www.linkedin.com/in/pablo-german-jimenez-0b706a200/)📊

#💥 Break-boy for ever🎵 

 ![🔥#Bboys on fire 🎵 ](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG11M2dtOHdnYWUxN3N6NTFoZ2t5Z24xcmV5djJjcjI4ODlyZ3duZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ANFZtmUiXncuUmKMwY/giphy.gif)

