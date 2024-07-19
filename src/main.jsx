import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Tabla_desing from './Components/Molecules/Tabla_desing.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Tablas", element: <Tabla_desing /> },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
