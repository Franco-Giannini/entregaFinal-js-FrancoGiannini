let productosCarrito = localStorage.getItem("carrito-productos");
productosCarrito = JSON.parse(productosCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritosAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar = document.querySelectorAll(".carrito-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("total");
const botonComprar = document.querySelector("#carrito-acciones-comprar")

function cargarProductosCarrito() {
    if(productosCarrito && productosCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritosAcciones.classList.remove("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
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
            `;
    
            contenedorCarritoProductos.append(div);
    
        })
    
    }else{
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritosAcciones.classList.add("disabled");
    }
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

//habia boton para eliminar los productos pero estuve cerca de que funcione, al final lo borre y deje que se vacieel carrito nomas.
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-eliminar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);

    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 0);     
    cargarProductosCarrito();

    localStorage.setItem("carrito-productos", JSON.stringify(productosCarrito));

}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {

    productosCarrito.length = 0;
    localStorage.setItem("carrito-productos", JSON.stringify(productosCarrito));
    cargarProductosCarrito();

}


function actualizarTotal(){
    const totalCalculado = productosCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {

    productosCarrito.length = 0;
    localStorage.setItem("carrito-productos", JSON.stringify(productosCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritosAcciones.classList.add("disabled");
    alert("¡Gracias por su compra!");
}

botonComprar.addEventListener("click", comprarCarrito);