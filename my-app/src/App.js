import logo from './logo.svg';
import css from './App.css';
import NavBar from "./Components/NavBar.js"
import Header from './Components/Header';
import Card from './Components/Card';
import fotoPrueba from './Fotos/fotoPrueba.jfif'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";

function App() {
  const ListaProductos = [
    {
      "id": 1,
      "nombre": "Camiseta",
      "precio": 20.99,
      "categoria": "Ropa"
    },
    {
      "id": 2,
      "nombre": "Zapatos deportivos",
      "precio": 49.95,
      "categoria": "Calzado"
    },
    {
      "id": 3,
      "nombre": "Mochila",
      "precio": 34.75,
      "categoria": "Accesorios"
    }
  ]
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/quienes-somos" element={<Nosotros/>}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
