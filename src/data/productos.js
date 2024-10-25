const productos = [
    {
        id: 1,
        nombre: "hola",
        color: "Charcoal black",
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
        nombre: "PlayStation 2",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"La PlayStation 2 (PS2) es una consola de videojuegos desarrollada por Sony, lanzada en el año 2000. Esta icónica consola revolucionó la industria del entretenimiento con su vasta colección de juegos, potente rendimiento y capacidades multimedia. Desde su lanzamiento, ha sido la favorita de millones de jugadores en todo el mundo, convirtiéndose en una de las consolas más vendidas de todos los tiempos.",
        caracteristicas:"hola",
        precio: 189.999,
        categoria: "playstation",
        stock: 2,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_782879-MLA41084675558_032020-O.webp"
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