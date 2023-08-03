import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar.js"
import Header from './Components/Header';
import Card from './Components/Card';
import fotoPrueba from './Fotos/fotoPrueba.jfif'

function App() {
  const ListaProductos = [
    {
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgjuouUEuDq20blbvR_g3w7LhENgAc_leNQ&usqp=CAU",
      tituloProducto: 'Producto 1',
      precio: 10.99
    },
  ]
  return (
    <div classNameName="App">
      <NavBar/>
      <Header/>
      <Card/>
    </div>
  );
}

export default App;
