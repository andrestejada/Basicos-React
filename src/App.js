import React , {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // Crear estado de productos

  const [productos , guardarProductos] = useState([
    {id:1, nombre:'Camiseta ReactJs', precio:500},
    {id:2, nombre:'Camiseta Angular', precio:300},
    {id:3, nombre:'Camiseta Vue', precio:200},
    {id:4, nombre:'Camiseta Node.js', precio:100},
  ])

  //state para carrito de compras

  const [carrito,agregarProducto] = useState([])

  const fecha = new Date().getFullYear();

  return (
    
    <Fragment>

       <Header
             titulo='Tienda Virtual Con React' 
             
        />

        <h1>Listado de Porductos</h1>

        {productos.map(producto =>(
            <Producto
              key={producto.id}
              productos={productos}
              producto = {producto}
              carrito={carrito}
              agregarProducto={agregarProducto}
            />
        ))}

        <Carrito
          carrito={carrito}
          agregarProducto={agregarProducto}
        />

        <Footer
            fecha={fecha}
        />

    </Fragment>
  );
}

export default App;
