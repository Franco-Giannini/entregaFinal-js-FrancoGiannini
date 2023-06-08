const productosCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritosAcciones = document.querySelector("#carrito-acciones");

if(productosCarrito) {

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritosAcciones.classList.remove("disabled");

    productosCarrito.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto-carrito");
        div.innerHTML = `
        <img class="carrito-img" src="${producto.imagen}" alt="">
        <div class="titulos-carrito">
            <small>titulo</small>
            <h3>${producto.titulo}</h3>
        </div>
         <div class="cantidad-carrito">
            <small>cantidad</small>
            <p>${producto.cantidad}</p>
        </div>
        <div class="precio-carrito">
            <small>precio</small>
            <p>${producto.precio}</p>
        </div>
        <div class="carrito-precio">
            <small>total</small>
             <p>${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carrito-eliminar" id="${producto.id}"><i class="bi bi-trash3"></i></button>
        `;

        contenedorCarritoProductos.append(div);

    })

}else{

}