const productos = [
    {
        id: 1,
        nombre: "hola",
        descripcion:"",
        caracteristicas:"hola",
        precio: 100,
        categoria: "pc",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 2,
        nombre: "chau",
        descripcion:"",
        caracteristicas:"hola",
        precio: 100,
        categoria: "pc",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 3,
        nombre: "compu",
        descripcion:"",
        caracteristicas:"hola",
        precio: 100,
        categoria: "celulares",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 4,
        nombre: "mouse",
        descripcion:"",
        caracteristicas:"hola",
        precio: 100,
        categoria: "televisores",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 5,
        nombre: "teclado",
        descripcion:"",
        caracteristicas:"hola",
        precio: 100,
        categoria: "componentes",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 6,
        nombre: "Play",
        descripcion:"",
        caracteristicas:"hola",
        precio: 100,
        categoria: "playstation",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 7,
        nombre: "Play 2",
        descripcion:"",
        caracteristicas:"hola",
        precio: 100,
        categoria: "playstation",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 8,
        nombre: "saludo",
        descripcion:"",
        caracteristicas:"hola",
        precio: 100,
        categoria: "playstation",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    


]

const obtenerProductos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export default obtenerProductos