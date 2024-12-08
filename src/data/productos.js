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
        nombre: "Smart Tv",
        nombreinfo:"Smart Tv Tcl L43s5400 Full HD 43 Pulgadas Android Tv Google Assistant Negro",
        descripcion:"Tamaño de la pantalla: 43.Resolución: Full HD.Es smart: Sí.Cantidad de puertos HDMI: 2.Tipo de pantalla: LED.Aplicaciones integradas: Prime Video, Disney+, Flow, HBO, Netflix, Spotify, YouTube",
        caracteristicas:"Tamaño de la pantalla: 43. Su resolución es Full HD.Tecnología HDR para una calidad de imagen mejorada.Modo de sonido: Dolby Digital.Manejalo por comando de voz.Con Prime Video.Google Assistant incorporado.Sistema operativo Android.Capacidad de almacenamiento de 8GB.Conectá tus dispositivos mediante sus 2 puertos HDMI y sus 2 puertos USB.Entretenimiento y conectividad en un mismo lugar.",
        datos:"Mismo precio en 6 cuotas de $73.333,17",
        precio: 439000,
        categoria: "televisores",
        stock: 50,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_925628-MLU74196174227_012024-O.webp"
    },
    {
        id: 5,
        nombre: "Fuente Cooler",
        nombreinfo:"Fuente Cooler Master 850w 80 Plus Gold Full Modular Gx2 Mpx-8503-afag-2bar",
        descripcion:"Potencia de salida de 850W. Fuente de tipo ATX. Con certificación de eficiencia 80 Plus Gold. Diámetro del ventilador de 120mm. Refrigeración por aire.",
        caracteristicas:"Producto: Fuente Cooler Master 850W 80 Plus Gold Full Modular GX2 MPX-8503-AFAG-2BAR. Especificaciones Tecnicas: - Marca : Cooler Master. - Modelo : GX II Gold 850. - P/N : MPX-8503-AFAG-2BAR. - Entrada CA : 100-240V. - Frecuencia Entrada CA : 50-60 Hz. - Voltaje Entrada CA : 100-240V. - Corrección del Factor de Potencia : PFC Activo. - Eficiencia a Carga Típica : = 90%. - Potencia Maxima de Salida : 850W. - Salida Maxima de Corriente -12V : 0,3A. - Potencia Maxima -12V : 3,6W. - Rail de +12V : Único. - Salida Maxima de Corriente +12V1 : 70,8A. - Potencia Maxima +12V1 : 849,6W. - Salida Maxima de Corriente +3,3V : 20A. - Salida Maxima de Corriente +5V : 20A. - Potencia Maxima +3,3V & +5V : 120W. - Salida Maxima de Corriente +5VSB : 3A. - Potencia Maxima +5VSB : 15W. - CONECTORES : ATX 24 Pin x1, EPS 4+4 Pin x1, EPS 8 Pin x1, SATA(x2) x6, Peripheral 4 Pin x2, PCI-e 6+2 Pin x4, 12VHPWR x1. - Tamaño del Fan Cooler : 120mm. - Dimensiones de la fuente : 160 x 150 x 86 mm. - Peso Neto : 2,614 kg. - Factor de Forma : ATX 12V Ver 3,0. - Peso Bruto : 3,004 kg. - Dimensiones de la Caja : 320 x 195 x 125 mm. - Protecciones : OPP, OVP, OTP, OCP, SCP, UVP, Protección contra sobretensiones y picos de corriente. - Power Factor Corrector : PFC Activo. - 80 Plus : Gold.",
        datos:"en 6 cuotas de $37.702,12",
        precio: 166000,
        categoria: "componentes",
        stock: 11,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_941925-MLA80335190722_112024-O.webp"
    },
    {
        id: 6,
        nombre: "PlayStation 5",
        nombreinfo:"Sony PlayStation 5 Slim 1TB Standard color blanco",
        descripcion:"Capacidad: 1 TB. Incluye control.Memoria RAM de 16GB.Cuenta con: cable hdmi.La duración de la batería de los controles depende del uso que se le dé al producto.",
        caracteristicas:"Descripción: La consola PS5® Slim libera nuevas posibilidades de juego, experimenta una carga ultrarrápida con un SSD de velocidad ultra alta, una inmersión más profunda con soporte para retroalimentación háptica, disparadores adaptativos y audio 3D.• Diseño Slim: La consola PS5® Slim ofrece una potente tecnología de juego en un diseño de consola elegante y compacto.• 1 TB de almacenamiento: Mantén tus juegos favoritos listos con 1 TB de almacenamiento SSD integrado.3• SSD de ultra alta velocidad: Maximiza tus sesiones de juego con tiempos de carga casi instantáneos para los juegos de PS5® instalados.• E/S integradas: La integración personalizada de los sistemas de la consola PS5® Slim permite a los creadores extraer datos del SSD de manera rápida.• Juegos de TV 4K: Juega tus juegos favoritos de PS5® en tu televisor 4K.• Hasta 120 fps con salida de 120 Hz: Disfruta de un juego fluido con una alta velocidad de cuadros de hasta 120 fps para juegos compatibles.• Tecnología HDR: Los juegos de PS5® compatibles muestran una gama de colores increíblemente vibrantes y realistas con un televisor HDR.• Tempest 3D AudioTech: Sumérgete en paisajes sonoros donde sentirás como si el sonido viniera de todas direcciones con Tempest 3D AudioTech2 en juegos compatibles.• Retroalimentación háptica: Experimenta la retroalimentación háptica a través del controlador inalámbrico DualSense® en títulos seleccionados de PS5®.• Activadores adaptativos: Familiarízate con disparadores adaptativos inmersivos, que presentan niveles de resistencia dinámica que simulan el impacto físico de las actividades del juego.• Incluye sala de juegos de ASTRO: Explora cuatro mundos, cada uno de los cuales muestra una jugabilidad utilizando las funciones versátiles del controlador inalámbrico DualSense®.Aviso legal.• La duración de la batería de los controles depende del uso que se le dé al producto.",
        datos:"Mismo precio en 12 cuotas de $116.666,58",
        precio: 1400000,
        categoria: "playstation",
        stock: 1,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_962664-MLU73679556895_122023-O.webp"
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
        nombre: "Playstation 4",
        nombreinfo:"Consola Sony Playstation 4 Slim de 1 TB color negro",
        descripcion:"Capacidad: 1 TB Memoria RAM de 8 GB. Cuenta con: cable HDMI. La duración de la batería de los controladores depende de cómo se utilice el producto.",
        caracteristicas:"Descubre la PS4 Slim 1TB, la consola de entretenimiento definitiva para los aficionados a los videojuegos, con su elegante diseño en color negro, la PS4 Slim ofrece una experiencia de juego excepcional con gráficos de alta calidad y un rendimiento fluido, equipada con un disco duro de 1TB, proporciona espacio más que suficiente para almacenar todos tus juegos favoritos, así como aplicaciones y contenido multimedia.El paquete incluye un controlador inalámbrico DualShock 4, diseñado para brindar precisión y comodidad durante horas de juego, conecta la consola a tu red WiFi y accede a una amplia gama de servicios de entretenimiento, como streaming de películas, música y más, directamente desde la PlayStation Store.La PS4 Slim es compatible con la tecnología HDR para una gama de colores más amplia y realista en juegos compatibles y en contenido multimedia, además, disfruta de la experiencia del juego en línea con amigos y jugadores de todo el mundo a través del servicio PlayStation Plus (suscripción no incluida).Ideal para jugadores de todas las edades y niveles de habilidad, la PS4 Slim no solo ofrece diversión sin límites, sino que también se integra perfectamente en tu hogar como un centro de entretenimiento multimedia.Aviso legal.• La duración de la batería de los controles depende del uso que se le dé al producto.",
        datos:"Cuota promocionada en 6 cuotas de $126.978,10",
        precio: 678000,
        categoria: "playstation",
        stock: 4,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_790687-MLA77245804786_072024-O.webp"
    },
    {
        id: 9,
        nombre: "PC",
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
        nombre: "PC",
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
        nombre: "PC",
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
        nombre: "PC",
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
        nombre: "PC",
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
        nombre: "PC",
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
        nombre: "PC",
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
        nombre: "PC",
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
        nombre: "PC",
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
        nombre: "PC",
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
        nombre: "PC",
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
        nombre: "PC",
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