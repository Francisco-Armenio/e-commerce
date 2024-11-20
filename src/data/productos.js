const productos = [
    {
        id: 1,
        nombre: "PC de Escritorio",
        nombreinfo:"Pc Computadora Completa Intel I3 1tb 8gb Con Monitor Led 19",
        caracteristicas:"Procesador: Intel Core i3.Memoria: 8Gb.Disco rigido 1Tb (1000Gb) o solido ssd 250gb segun stock o eleccion del comprador.Gabinete con fuente de 500 W con teclado y mouse.Gráficos: Onboard.Salida de video.Red Onboared Ethernet 10/100/1000 Gigabit.Incluye Monitor led 19." ,
        descripcion:"Producto:Computadora armada Core I3 8gb Ram Hd 1TB con teclado y mouse + Monitor led de 19",
        datos:"en 6 cuotas de $90.343,27",
        precio: 389999,
        categoria: "pc",
        stock: 20,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_859545-MLA77491221280_072024-O.webp"
    },
    {
        id: 2,
        nombre: "PC de oficina",
        nombreinfo:"PC Armada Completa Cpu Computadora I5 8gb 1tb O Ssd Oficina",
        descripcion:"PC de Escritorio Intel Core i5.Ideal para Colegios, Oficinas, Negocios, Sistemas de Gestión, Uso Hogareño y mas.",
        caracteristicas:"Procesador: Intel Core i5 - 4 Nucleos, 3.30Ghz Max, 4 Subprocesos..Memoria Ram: 8Gb.Almacenamiento: 1Tb Sata.Gabinete: Sentey / Overtech OV-710 / PCBOX.Incluye Teclado, Mouse y Parlantes",
        datos:"en 6 cuotas de $64.661,62",
        precio: 372180,
        categoria: "pc",
        stock: 20,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_806233-MLA74985788303_032024-O.webp"
    },
    {
        id: 3,
        nombre: "Zte Blade A73",
        nombreinfo:"Teléfono Celular Zte Blade A73 128gb 4gb Ram Space Black",
        caracteristicas:"Marca: ZTE.Modelo:A73.Color:Negro",
        descripcion:"Memoria RAM: 4 GB.Dispositivo liberado para que elijas la compañía telefónica que prefieras..Memoria interna de 128GB.",
        datos:"Cuota promocionada en 6 cuotas de $54.871,47",
        precio: 289000,
        categoria: "celulares",
        stock: 1,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_756095-MLA77936901830_082024-O.webp"
    },
    {
        id: 4,
        nombre: "mouse",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "televisores",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 5,
        nombre: "teclado",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "componentes",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 6,
        nombre: "Play",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
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
        descripcion:"Consola Sony PlayStation 2 Slim en color charcoal black.Rendimiento fluido con procesador de 147 GHz y 32 MB de RAM.Compatible con juegos en DVD y CD para amplia variedad.Incluye un control para comenzar a jugar de inmediato.Conexión por cable para experiencia de juego estable.Funcionamiento constante con alimentación eléctrica",
        caracteristicas:"Memoria RAM 32 MB.Tipo de consola: de sobremesa. Con Wi-Fi: No. Cantidad de controles incluidos: 1",
        datos:"En 6 cuota de en 6 cuotas de $44.013,27 ",
        precio: 190000,
        categoria: "playstation",
        stock: 2,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_782879-MLA41084675558_032020-O.webp"
    },
    {
        id: 8,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "playstation",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 9,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "celulares",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 10,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "celulares",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 11,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "pc",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 12,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "pc",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 13,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "componentes",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 14,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "celulares",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 15,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "playstation",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 16,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "componentes",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 17,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"LLega mañana",
        precio: 100,
        categoria: "pc",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 18,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "televisores",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 19,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "componentes",
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_750454-MLA77598323063_072024-O.webp"
    },
    {
        id: 20,
        nombre: "saludo",
        nombreinfo:"Sony PlayStation 2 Slim Gran Turismo 4 Edition color charcoal black",
        color: "Charcoal black",
        descripcion:"",
        caracteristicas:"hola",
        datos:"dada",
        precio: 100,
        categoria: "televisores",
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