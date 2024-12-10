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
        nombre: "Samsung Galaxy A35",
        nombreinfo:"Samsung Galaxy A35 5G 256GB Awesome navy 8GB RAM",
        descripcion:"Memoria RAM: 8 GB. Dispositivo liberado para que elijas la compañía telefónica que prefieras. Compatible con redes 5G. Memoria interna de 256GB.",
        caracteristicas:"Capacidad y eficiencia.Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.Capacidad de almacenamiento ilimitada.Olvidate de borrar, con su memoria interna de 256 GB podrás descargar todos los archivos y aplicaciones que necesites, guardar fotos y almacenar tus películas, series y videos favoritos para reproducirlos cuando quieras.",
        datos:"Mismo precio en 9 cuotas de $66.666,56",
        precio: 599999,
        categoria: "celulares",
        stock: 30,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_891383-MLU77717518407_072024-O.webp"
    },
    {
        id: 10,
        nombre: "Ipro A32",
        nombreinfo:"Ipro A32 Dual-sim / Camara Doble / Radio Fm / Linterna",
        descripcion:"Memoria interna: 128 MB",
        caracteristicas:"Ipro A32. Características avanzadas: El teléfono IPRO A32 ofrece una gama de características avanzadas, incluyendo una CPU de cuatro núcleos, soporte de tarjeta SIM dual y una radio FM incorporada, estas características lo convierten en una opción ideal para los usuarios que buscan un teléfono móvil confiable y rico en funciones. Soporte multilingüe: Este teléfono es compatible con varios idiomas, atendiendo a los usuarios que requieren un dispositivo que pueda adaptarse a sus preferencias de idioma. Duración de la batería de larga duración: con una capacidad de batería de 800mAh, este teléfono proporciona una duración de batería confiable y duradera, lo que lo hace adecuado para usuarios que siempre están en movimiento. Diseño compacto: El diseño compacto del teléfono, con un tamaño de pantalla de menos de 1,8 pulgadas, lo convierte en una opción ideal para los usuarios que prefieren un dispositivo pequeño y portátil. Caracteristicas: Bateria 800mAh. Pantalla: 1,8 TFT. Radio FM. Linterna. Doble Camara Trasera 0,8MP. Dual-SIM. Entrada Auricular 3,5mm. MP3 / MP4. Memoria Interna Expandible hasta 32GB con tarjeta SD. Garantía del vendedor: 60 días",
        datos:"Cuota promocionada en 6 cuotas de $7.116,58",
        precio: 37999,
        categoria: "celulares",
        stock: 2,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_687182-MLA80364205482_112024-O.webp"
    },
    {
        id: 11,
        nombre: "Notebook Lenovo",
        nombreinfo:"Notebook Lenovo V15 G4 Amn Amd Ryzen 3 7320u 16gb De Ram Ssd 512gb Gráficos Amd Radeon 610m 1920x1080px Teclado Español Gris",
        descripcion:"Tarjeta gráfica: Gráficos AMD Radeon 610M. Con pantalla táctil: No. Resolución de la pantalla: 1920 px x 1080 px. Procesador: AMD Ryzen 3 7320U. Sistema operativo: FreeDOS. Capacidad de disco SSD: 512 GB. Memoria RAM: 16 GB. Resolución de 1920x1080 px con retina display. Placa de video Gráficos AMD Radeon 610M. Conexión wifi y bluetooth. Cuenta con puerto USB y puerto HDMI.",
        caracteristicas:"Aviso legal. • La duración de la batería depende del uso que se le dé al producto.",
        datos:"Mismo precio en 18 cuotas de $51.777,72",
        precio: 931999,
        categoria: "pc",
        stock: 5,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_871932-MLA80777741741_112024-O.webp"
    },
    {
        id: 12,
        nombre: "Pc Armada Gamer",
        nombreinfo:"Pc Armada Gamer Amd Ryzen 5 4600g Ram 16gb Radeon Vega Hdmi",
        descripcion:"Marca: AMD. Modelo: Ryzen 5 4600g. Tipo de procesador: AMD Ryzen 5. Tamaño del disco duro: 480 GB. Marca del procesador: AMD. Línea del procesador: Ryzen 5. Modelo del procesador: Ryzen 5 4600g. Cantidad de piezas: 5. Piezas incluidas: MOTHER, MICRO, MEMORIA, DISCO SSD, GABINETE ATX KIT. Nombre del sistema operativo: Windows 10 Trial. Versión del sistema operativo: 10. Edición del sistema operativo: Home. RAM: 16 GB. Tamaño de la pantalla: 0,01. Es un kit de fábrica: No. Es gamer: No. Es ia: No.",
        caracteristicas:"- MICRO PROCESADOR: AMD Ryzen 5 4600g 5Ta Generación. - MOTHER: BIOSTAR/ASROCK B450M/A520MH 3,0. - DISCO RIGIDO: SSD 480GB SATA3 ADATA. - MEMORIA RAM: 16GB DDR4 3200 HIKVISION. - GABINETE: SENTEY F10 RGB - FUENTE LNZ550W. SOFT SIN ACTIVACION. ENVIOS GRATUITOS A TU DOMICILIO A TODO EL PAIS!!!. ACEPTAMOS TODAS LAS TARJETAS DE CREDITO POR MERCADOPAGO!!!. ENCONTRA TODAS LAS MARCAS Y MODELOS DEL MERCADO EN 4KRC!!!. NO INCLUYE: MONITOR, NI DVD. Garantía del vendedor: 1 años",
        datos:"Cuota promocionada en 6 cuotas de $75.812",
        precio: 404799,
        categoria: "pc",
        stock: 28,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_885202-MLA76411702814_052024-O.webp"
    },
    {
        id: 13,
        nombre: "Procesador gamer Intel Core i5",
        nombreinfo:"Procesador gamer Intel Core i5-10400F BX8070110400F de 6 núcleos y 4.3GHz de frecuencia",
        descripcion:"Modelo: i5-10400F. Rendimiento óptimo en juegos con 6 núcleos y 12 hilos de CPU. Frecuencia máxima de reloj de 4.3 GHz para fluidez en aplicaciones. Soporta hasta 128 GB de memoria RAM DDR4 para mejor experiencia. Tecnología hyperthreading para mayor rapidez y eficiencia. Eficiencia energética con 65 W de potencia de diseño térmico. Compatible con zócalos FCLGA1200 y arquitectura x8664. No posee graficos integrados",
        caracteristicas:"Mejora tu experiencia de juego con el Procesador gamer Intel Core i5-10400F, diseñado para brindarte un rendimiento óptimo en tus partidas. Con sus 6 núcleos y 12 hilos de CPU, este procesador te permitirá disfrutar de tus juegos favoritos sin interrupciones ni demoras. Gracias a su arquitectura x86-64 y su frecuencia máxima de reloj de 4.3 GHz, podrás ejecutar múltiples aplicaciones y juegos de manera fluida y eficiente. Además, su compatibilidad con memoria RAM DDR4 y su capacidad para soportar hasta 128 GB de memoria, te aseguran una experiencia de juego inigualable. La tecnología hyper-threading te brinda un rendimiento aún más rápido y eficiente en tus tareas diarias. Con una litografía de 14 nm y una potencia de diseño térmico de 65 W, este procesador es una opción ideal para aquellos que buscan un rendimiento excepcional sin sacrificar la eficiencia energética. No esperes más y lleva tu experiencia de juego al siguiente nivel con el Procesador gamer Intel Core i5-10400F.",
        datos:"en 6 cuotas de $33.872,27",
        precio: 149999,
        categoria: "componentes",
        stock: 3,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_660865-MLA80555857980_112024-O.webp"
    },
    {
        id: 14,
        nombre: "Ipro F189",
        nombreinfo:"Ipro F189 Con Teclas Grandes Dual-sim / Boton Sos / Radio",
        descripcion:"Tamaño de la pantalla: 1,77. Memoria interna: 32 MB. Cámara trasera principal: 0,08 Mpx",
        caracteristicas:"Ipro F189. Características avanzadas: El teléfono IPRO F189 ofrece una gama de características avanzadas, incluyendo una CPU de cuatro núcleos, soporte de tarjeta SIM dual y una radio FM incorporada, estas características lo convierten en una opción ideal para los usuarios que buscan un teléfono móvil confiable y rico en funciones cuenta con Botones grandes para las personas con visibilidad disminuida , Boton SOS y Boton para Radio Fm. Soporte multilingüe: Este teléfono es compatible con varios idiomas, atendiendo a los usuarios que requieren un dispositivo que pueda adaptarse a sus preferencias de idioma. Duración de la batería de larga duración: con una capacidad de batería de 800mAh, este teléfono proporciona una duración de batería confiable y duradera, lo que lo hace adecuado para usuarios que siempre están en movimiento. Diseño compacto: El diseño compacto del teléfono, con un tamaño de pantalla de menos de 1.8 pulgadas, lo convierte en una opción ideal para los usuarios que prefieren un dispositivo pequeño y portátil. Caracteristicas:. -Bateria 800mAh. -Pantalla: 1,8 TFT. -Radio FM. -Linterna. -Boton SOS. -Boton RADIO FM. -Camara Trasera 0,8MP. -Dual-SIM. -Entrada Auricular 3,5mm. -MP3 / MP4. -Memoria Interna Expandible hasta 32GB con tarjeta SD. Garantía del vendedor: 60 días",
        datos:"en 6 cuotas de $8.490,53",
        precio: 37599,
        categoria: "celulares",
        stock: 20,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_753873-MLA80968965303_112024-O.webp"
    },
    {
        id: 15,
        nombre: "PlayStation 3",
        nombreinfo:"Sony PlayStation 3 Slim 160GB Standard color charcoal black 2010",
        descripcion:"Incluye control. Resolución de 1920px x 1080px. Memoria RAM de 256MB. Cuenta con: 1 cable usb. La duración de la batería de los controles depende del uso que se le dé al producto.",
        caracteristicas:"Aviso legal.• La duración de la batería de los controles depende del uso que se le dé al producto.",
        datos:"Cuota promocionada en 6 cuotas de $67.422",
        precio: 360000,
        categoria: "playstation",
        stock: 20,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_723813-MLA31465028928_072019-O.webp"
    },
    {
        id: 16,
        nombre: "Ryzen 7 8700g",
        nombreinfo:"Procesador Amd Ryzen 7 8700g 4.2ghz Radeon 8 Cores Am5",
        descripcion:"Modelo: 8700g Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución. Memoria caché de 16 MB, rápida y volátil. Procesador gráfico AMD Radeon 780M. Soporta memoria RAM DDR5. Su potencia es de 65 W. Cuenta con 16 hilos que favorecen la ejecución de múltiples programas a la vez. Producto en empaque original. Procesador innovador desarrollado bajo altos estándares de calidad. Zócalos compatibles: AM5",
        caracteristicas:"Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles.AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.",
        datos:"en 6 cuotas de $88.068,27",
        precio: 389999,
        categoria: "componentes",
        stock: 6,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_662075-MLU74346658078_022024-O.webp"
    },
    {
        id: 17,
        nombre: "Notebook Lenovo Pentium",
        nombreinfo:"Notebook Lenovo Pentium Silver N5030 4gb 128gb 14'' Plateado",
        descripcion:"Con pantalla táctil: No. Resolución de la pantalla: 1366 px x 768 px. Procesador: Intel Pentium Silver N5030. Sistema operativo: Windows 10. Capacidad de disco SSD: 128 GB. Memoria RAM: 4 GB. Resolución de 1366x768 px.",
        caracteristicas:"Laptop con pantalla de 14 HD (1366 x 768) no táctil. Procesador Intel N5030 de 4 núcleos a 1,1 GHz. 4 GB de memoria DDR4 a 2400 MHz. Almacenamiento SSD de 128 GB con interfaz NVMe PCIe 2,0. 2 puertos USB 3,2 Gen 1 y un puerto HDMI 1,4. Combo para auriculares/micrófono. Peso de 1,4 kg. Dimensiones: 327,1 mm de ancho, 235 mm de profundidad, y entre 1,77 y 1,79 cm de altura.",
        datos:"Mismo precio en 18 cuotas de $37.055,50",
        precio: 666999,
        categoria: "pc",
        stock: 30,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_699789-MLU77225829868_072024-O.webp"
    },
    {
        id: 18,
        nombre: "TCL TV",
        nombreinfo:"TCL TV Led L55p635 Uhd Google Color Negro",
        descripcion:"Tamaño de la pantalla: 55. Su resolución es UHD.Modo de sonido: Stereo.Con Amazon prime video.Sistema operativo Google.Capacidad de almacenamiento de 16GB.Conectá tus dispositivos mediante sus 3 puertos HDMI y su puerto USB.Dimensiones: 122,6cm de ancho, 71,1cm de alto, 8,1cm de profundidad.Entretenimiento y conectividad en un mismo lugar.",
        caracteristicas:"TCL es una de las empresas líderes en la industria global de televisores, dedicada a la investigación y desarrollo de productos electrónicos, orientada a la satisfacción de sus clientes, se distingue por proveer una excelente experiencia a quienes adquieran y usen sus diferentes líneas de electrodomésticos.DATOS TÉCNICOS.-Núcleos de la CPU: 32-bit A55×4 1,3GHz.-Núcleos de GPU: G31 MP2 800MHz.-Sistema operativo Certificado por: Google TV.-Potencia de audio: 10W*2.-Dolby audio.-Canales de sonido:２.-Bluetooth audio solo: Si.-Resolución: ４K.-Resolución del panel: 3840*2160.-Relación de aspecto: 16:9.-Frecuencia de refrescamiento: 60HZ.-HDR10.-HLG: Si.-Micro Dimming: Si.-Tablero de TV: Si.-Bluetooth: BT5,0.-Conectividad WiFi: 2,4G/5G.-USB 3,0 X 1.-HDMI2,1 X 3.-PVR/cambio de tiempo: Si.-EPG.-DTV EPG(Sin IP EPG).-Subtítulos Si (DTV).",
        datos:"Mismo precio en 12 cuotas de $86.233,25",
        precio: 1034799,
        categoria: "televisores",
        stock: 30,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_976340-MLU79037935791_092024-O.webp"
    },
    {
        id: 19,
        nombre: "Pasta Térmica",
        nombreinfo:"Pasta Térmica Grasa Siliconada Arctic Mx-4 4g Alta Potencia",
        descripcion:"Marca: Arctic. Línea: MX-4. Modelo: MX-4 4g. Formato de venta: Unidad. Color Del LED: No aplica. Componente compatible: CPUs, GPUs, Consolas, PS4, PS3, Xbox, Placas de Videos, Etc.. Es gamer: Sí. Incluye pasta térmica: Sí",
        caracteristicas:"El ARCTIC MX-4 es un compuesto térmico de alta conductividad fabricado con micropartículas de carbono que optimiza la disipación de calor en CPUs y GPUs, ideal para overclockers, entusiastas y aplicaciones térmicas exigentes. Su consistencia facilita la aplicación, incluso para principiantes, y su fórmula libre de metales evita riesgos de cortocircuitos y corrosión, además de garantizar una durabilidad de hasta 8 años tras la aplicación. Es un producto de calidad probada, diseñado para un rendimiento eficiente y respetuoso con el medio ambiente, con envases reciclables y especificaciones técnicas destacadas como su conductividad térmica de 8,5W/(mK).",
        datos:"en 6 cuotas de $1.918,48",
        precio: 8495,
        categoria: "componentes",
        stock: 22,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_730507-MLA72856039903_112023-O.webp"
    },
    {
        id: 20,
        nombre: "Smart Tv 32",
        nombreinfo:"Smart Tv 32 Noblex Series DV32X7000 Android Tv HD",
        descripcion:"Tamaño de la pantalla: 32. Cuenta con wi-fi y puerto de red. Cuenta con 2 puertos HDMI. Cuenta con conexión USB. Con conectividad mediante Bluetooth. Dimensiones: 72.6cm de ancho, 43cm de alto y 8.4cm de profundidad. Apto para la red eléctrica de tu país.",
        caracteristicas:"Descubre la Smart TV Noblex de 32 pulgadas HD Android TV, la opción ideal para transformar tu experiencia de entretenimiento en casa. Con su pantalla LED de 32 pulgadas y resolución HD, disfruta de imágenes nítidas y vibrantes en cualquier rincón. Equipado con el sistema operativo Android TV, este televisor te permite acceder fácilmente a una amplia gama de aplicaciones y servicios de streaming, todo desde una interfaz intuitiva. Con conectividad USB y HDMI, así como la función de apagado automático, la Noblex ofrece comodidad y eficiencia, la navegación por internet y el Asistente de Google facilitan el control por voz, mientras que el control parental y la función SAP garantizan una experiencia personalizada y segura para toda la familia. Ideal para el entretenimiento, cuenta con opciones de juegos, un ecualizador ajustable, y modos especializados como Sports Mode y Game Mode para optimizar tu experiencia, la Smart TV Noblex combina tecnología avanzada con facilidad de uso, ofreciendo un rendimiento excepcional y diversión garantizada ¡No te pierdas la oportunidad de llevarte a casa esta joya tecnológica! .ESPECIFICACIONES TECNICAS. -Tipo de pantalla: LED. -Tipo de TV: SI IART Pulgadas 32. -Relacion de aspecto: 16:09. -Contraste: 3000: 1. -Brillo: 180cd. -Tiempo de respuesta: 9,5 ms. -Frecuencia de refresco: ó0 hz. -Norma de video: Pal-N / Pal-M /NTSC. -Control dinamico del backlight: Si. SONIDO. -Cantidad de parlantes: 2. -Potencia de parlantes: 2x8w. -SAP: Si. -Ecualizador: Si. -Características: Sports I lode / Game Node. CONECTIVIDAD. -USB: 2. -HDMI: 2. -WI-FI: Si. -Puerto de red: Si. -Audio y video (a/vI): Si. -3Sintonizador digital tda: Si. -Bluetooth: Si. -Salida de audio óptico digital: Si. -HDMI cec: Si. FUNCIONES ESPECIALES. -Navegación internet: Si. -Google Assistant: Si. -Juegos: Si. -Control parental: Si.",
        datos:"Mismo precio en 12 cuotas de $38.383,25",
        precio: 460599,
        categoria: "televisores",
        stock: 5,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_805085-MLA80308609771_102024-O.webp"
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