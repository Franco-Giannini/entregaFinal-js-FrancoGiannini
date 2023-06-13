//productos
const productos = [
    {
        id: "taladro1",
        titulo: "taladro inalambrico",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_940549-MLA42693899652_072020-O.webp",
        precio: 44018
    },
    {
        id: "amoladora1",
        titulo: "moladora angular",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_749732-MLA53053380641_122022-O.webp",
        precio: 12432
    },
    {
        id: "soldadora1",
        titulo: "soldadora inverter",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_998817-MLA52149508056_102022-O.webp",
        precio: 47260
    },
    {
        id: "llaves1",
        titulo: "set bahco",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_786659-MLA44621325000_012021-O.webp",
        precio: 93329
    },
]

let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito  = document.querySelector("#numerito")

function cargarProductos(listaProductos) {
    const contenedorProductos = document.querySelector("#contenedor-productos");
    listaProductos.forEach(producto => {
        let div = document.createElement("div");
        div.classList.add("productos");
        div.innerHTML = `
            <img class="produc-img imagen-tala" src="${producto.imagen}" alt="">
            <div class="produc-detalles">
                <h5 class="produc-titulo">${producto.titulo}</h5>
                <p class="produc-precio">$${producto.precio}</p>
                <button class="boton-agregar" id= "${producto.id}" >agregar al carrito</button>
            </div>
        `;  
        contenedorProductos.append(div);    
     });

     actualizarBotonesAgregar();
}

cargarProductos(productos);

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".boton-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    });
}

let productosEnCarrito = [];

let productosEnCarritoLS = localStorage.getItem("carrito-productos");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();   
}else{
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }  
    actualizarNumerito();
    localStorage.setItem("carrito-productos", JSON.stringify(productosEnCarrito));
}   
         
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc +  producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}