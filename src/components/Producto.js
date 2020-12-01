import React from 'react'

const Producto = ({producto,carrito,agregarProducto,productos})=>{

    const {nombre , id ,precio} = producto

    //Agredar una function 

    const seleccionarProductos= id =>{
        const producto = productos.filter(producto=> producto.id===id)[0]
        agregarProducto([...carrito,producto])
    }


    //elimar un producto

    const eliminarProducto = id =>{
        const productos = carrito.filter(producto => producto.id !== id)

        //colocar los productos en el state

        agregarProducto(productos)
    }

    return(

     <div>
         <h2>{nombre}</h2>
         <p>${precio}</p>

       
         {productos
         ?
          (  <button
                    type='button'
                    onClick={()=>seleccionarProductos(id)}
            >Comprar</button>)
         : (
            <button
                    type='button'
                    onClick={()=>eliminarProducto(id)}
            >Eliminar</button>)
         }
         
         
     </div>    
    )
};


export default Producto ;


