const productos = [
    {
        id: 1,
        nombre: "jaja",
        descripcion:"",
        precio: 100,
        categotia: "jaja",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 2,
        nombre: "jaja",
        descripcion:"",
        precio: 100,
        categotia: "jaja",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 3,
        nombre: "jaja",
        descripcion:"",
        precio: 100,
        categotia: "jaja",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 4,
        nombre: "jaja",
        descripcion:"",
        precio: 100,
        categotia: "jaja",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },

]

const obtenerProductos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 10)
    })
}

export default obtenerProductos