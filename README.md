# Mi App React — Práctica con React

Aplicación web de una sola página (SPA) construida con **React 18**, **React Router v6** y **Vite**.

---

## 🚀 Cómo ejecutar el proyecto

### 1. Crear el proyecto con Vite
```bash
npm create vite@latest my-app -- --template react
cd my-app
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Instalar React Router
```bash
npm i react-router-dom
```

### 4. Ejecutar en modo desarrollo
```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🗂️ Estructura del proyecto

```
my-app/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          ← Punto de entrada
    ├── App.jsx           ← Enrutador principal
    ├── index.css         ← Estilos globales
    ├── components/
    │   ├── Navbar.jsx    ← Barra de navegación
    │   ├── Navbar.css
    │   ├── Footer.jsx    ← Pie de página
    │   ├── Footer.css
    │   ├── Card.jsx      ← Tarjeta reutilizable
    │   └── Card.css
    └── views/
        ├── Home.jsx      ← Vista principal
        ├── Home.css
        ├── Profile.jsx   ← Vista de perfil
        ├── Profile.css
        ├── Count.jsx     ← Vista del contador
        └── Count.css
```

---

## 🧩 Componentes y características

### Navbar
- Barra de navegación sticky en la parte superior.
- Usa `NavLink` de React Router para marcar la ruta activa.
- Rutas: **Inicio**, **Perfil**, **Contador**.

### Home
- Vista de bienvenida con hero section.
- Muestra variables en párrafos (`appName`, `appDescription`).
- Renderiza el componente `Card` en un grid con datos de un array.
- Botones de navegación hacia otras vistas.

### Profile
- Muestra información del perfil almacenada en variables (`name`, `role`, `bio`).
- Usa `useState` para controlar el estado del perfil y el modo de edición.
- **Botón "Editar perfil"** activa un formulario.
- **Botón "Guardar cambios"** actualiza el valor de las variables del párrafo.

### Count
- Usa `useState` para almacenar el valor del contador (`count`) y el paso (`step`).
- Usa `useEffect` para actualizar el título de la pestaña del navegador al cambiar el contador.
- **Botón "Incrementar"** aumenta el valor de `count` según el paso seleccionado.
- **Botón "Decrementar"** disminuye el valor de `count`.
- **Botón "Reset"** regresa `count` a 0.
- Historial de los últimos 6 cambios con su hora.

### Footer
- Pie de página con año dinámico y tecnologías utilizadas.

---

## 🪝 Hooks utilizados

| Hook        | Dónde se usa       | Para qué                                         |
|-------------|--------------------|-------------------------------------------------|
| `useState`  | Profile, Count     | Manejar estado local (perfil, contador, paso)   |
| `useEffect` | Count              | Actualizar el título de la pestaña del browser  |

---

## 🔀 Rutas definidas

| Ruta         | Componente   | Descripción             |
|-------------|--------------|-------------------------|
| `/`          | `<Home />`    | Página de inicio        |
| `/profile`   | `<Profile />` | Perfil del usuario      |
| `/count`     | `<Count />`   | Contador interactivo    |
