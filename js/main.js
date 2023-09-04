
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}
const almendras = new Producto('almendras', 3000 , true)
const nueces = new Producto('nueces', 4000, false)
const avena = new Producto('avena', 2000, true)
const pasasDeUva = new Producto('pasas de uva', 1500, false)
const productos = [almendras, nueces, avena, pasasDeUva]
const productosLocalStorage = localStorage.getItem('productos')
const contenedorDeProductos = document.getElementById("contenedorDeProductos")
const crearProductoDom = (producto) => {
    const muestra = document.createElement("div")
    muestra.innerHTML = `
    <p> ${producto.nombre}</p>
    <p> ${producto.precio} pesos el kilo </p>
    <p> ${producto.stock?"hay stock😃":'no hay stock😭'}</p>
    ` 
    muestra.classList.add('elemento')
    contenedorDeProductos.appendChild(muestra)

}
const botonMostrarProductos = document.getElementById('mostrarProductos')
botonMostrarProductos.addEventListener("click",()=>{
    if(productosLocalStorage){
        productosLocalStorage.forEach((producto)=>
        crearProductoDom(producto)
        )
    }
    else{
        productos.forEach((producto)=>{
            crearProductoDom(producto)
        })
        localStorage.setItem("productos", JSON.stringify(productos));

    }
})


