// Datos del menú
const menuData = [
    {
        "Categoria": "Entradas",
        "Producto": "JALAPEÑOS (2 und)",
        "Descripcion": "Rellenos de queso y chorizo maduro y queso con guacamole",
        "Precio": "$22,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "ESQUITES",
        "Descripcion": "",
        "Precio": "$23,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "TOTOPOS GRATINADOS",
        "Descripcion": "Con queso y bañados en salsa de jitomate. Acompañado de sus salsas",
        "Precio": "$23,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "TOTOPOS SECOS",
        "Descripcion": "Totopos secos con sus respectivas salsas",
        "Precio": "$22,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "QUESADILLAS",
        "Descripcion": "Tortilla de harina con queso cheddar mozarella y salsa de la casa",
        "Precio": "$21,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "TINGAS!",
        "Descripcion": "Tortillas de maíz pollo jitomate chipotle jalapeño queso",
        "Precio": "$24,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "PA' LOS CUATES TEPOROCHO!",
        "Descripcion": "Cerdo pollo chicharrón pimentón cebolla y queso gratinado pico 'e gallo y fríjol",
        "Precio": "$34,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "ENFRIJOLADAS A LA MEXICANA",
        "Descripcion": "En tortilla de maíz de cerdo pollo res crema de frijol queso maíz salsa roja y verde con guacamole",
        "Precio": "$30,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "ENCHILADAS",
        "Descripcion": "3 tacos de tortilla de maíz bañadas en salsa de jitomate o bañadas en frijol refrito",
        "Precio": "$31,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "BOTANA MEXICANA",
        "Descripcion": "6 tacos en tortilla de maíz van sobre una cama de frijol refrito y guacamole acompañado de 8 triángulos de quesadilla",
        "Precio": "$34,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "CHISTORRAS!",
        "Descripcion": "Queso fundido con chorizo y paprika con salsa brava totopos tortillas frijol guacamole y pico e'gallo",
        "Precio": "$30,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "FRIJOLES CON CARNE!",
        "Descripcion": "Carne frijol tomate chile queso y totopos",
        "Precio": "$30,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "CHILACOS O CHILAQUILES",
        "Descripcion": "Totopos queso pollo carne maíz cebolla huevo frito guacamole pico e'gallo",
        "Precio": "$32,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "FAJITAS A LA MEXICANA!",
        "Descripcion": "Tiras de lomo de res ,pollo ,salteadas conpimentón cebolla limón tequila ,acompañado de frijol refrito  tortillas guacamole pico e'gallo y totopos",
        "Precio": "$37,000"
    },
    {
        "Categoria": "Entradas",
        "Producto": "FLAUTAS",
        "Descripcion": "2 flautas en tortilla de harina, 1 rellena de pollo y la otra de carne o si la quieres  solo de pollo . De solo carne tiene un costo adicional !",
        "Precio": "$33,000"
    },
    {
        "Categoria": "Sopas",
        "Producto": "SOPA AZTECA",
        "Descripcion": "Reducción de jitomate con epazote y pollo acompañada de pelos de tortilla aguacate crema y queso",
        "Precio": "$23,000"
    },
    {
        "Categoria": "Sopas",
        "Producto": "SOPA RANCHERA",
        "Descripcion": "Tomates asados con tabasco jitomate chile pollo pelos de tortilla aguacate",
        "Precio": "$23,000"
    },
    {
        "Categoria": "Sopas",
        "Producto": "SOPA DE FRIJOL REFRITO RANCHERO",
        "Descripcion": "Deliciosas carnitas de cerdo frijol refrito entero tomate cebolla chorizo y el toque secreto de la casa",
        "Precio": "$23,000"
    },
    {
        "Categoria": "Sopas",
        "Producto": "POZOLE",
        "Descripcion": "Apetitosa sopa mexicana cargada de intenso sabor a pollo cerdo lechuga... ¡para pasar cualquier guayabo!",
        "Precio": "$23,000"
    },
    {
        "Categoria": "Pa' Taquiar",
        "Producto": "TACOS AL PASTOR PARA ARMAR!",
        "Descripcion": "4 und. de tortilla de maíz con carnitas de cerdo en salsa chipotle piña cebolla cilantro guacamole pico e'gallo limón",
        "Precio": "$37,000"
    },
    {
        "Categoria": "Pa' Taquiar",
        "Producto": "TACOS DORADOS",
        "Descripcion": "6 mini tacos en tortilla de maíz rellenos de carne y pollo con lechuga guacamole maíz queso pico e'gallo y totopos",
        "Precio": "$29,000"
    },
    {
        "Categoria": "Pa' Taquiar",
        "Producto": "TACOS DE SALMON",
        "Descripcion": "3 und. de tacos en tortilla de maíz co queso aguacate salmón en fajitas limón acompañado de pico e'gallo de piña y totopos",
        "Precio": "$45,000"
    },
    {
        "Categoria": "Pa' Taquiar",
        "Producto": "TACOS DE CHILE CON CARNE",
        "Descripcion": "3 und. de tacos con carne y frijol lechuga queso pico e'gallo guacamole",
        "Precio": "$30,000"
    },
    {
        "Categoria": "Pa' Taquiar",
        "Producto": "TACOS DE CAMARÓN",
        "Descripcion": "3 und. de tortilla con camarón en salsa de chile ancho cebolla limón guacamole y pico e'gallo",
        "Precio": "$45,000"
    },
    {
        "Categoria": "Pa' Taquiar",
        "Producto": "TACOS CHICHARRÓN",
        "Descripcion": "",
        "Precio": "$30,000"
    },
    {
        "Categoria": "Chimichangas",
        "Producto": "CHIMICHANGAS x 2",
        "Descripcion": "En tortilla de harina rellena de pollo la otra rellena de carne con queso por dentro y crema de frijol refrito! Acompañadas de guacamole totopos y pico e gallo!",
        "Precio": "$34,000"
    },
    {
        "Categoria": "Chimichangas",
        "Producto": "CHIMICHANGAS MONTEREY",
        "Descripcion": "En tortilla de harina con tocineta y maduro con 2 salsas lechuga",
        "Precio": "$24,000"
    },
    {
        "Categoria": "Chimichangas",
        "Producto": "CHIMICHANGAS AL PASTOR",
        "Descripcion": "En tortilla de harina con carnitas de cerdo piña y salsa chipotle limón con 2 salsas al gusto",
        "Precio": "$24,000"
    },
    {
        "Categoria": "Para Compartir",
        "Producto": "POPURRI MEXICANO",
        "Descripcion": "2 tacos de pollo 2 quesadillas de champoñón frijol con carne 2 tacos al pastor arroz mexicano totopos gratinados guacamole pico e'gallo sour cream",
        "Precio": "$80,000"
    },
    {
        "Categoria": "Para Compartir",
        "Producto": "PARA EL BOTIJA Y LA CHIMOLTRUFIA... AH Y EL CHOMPIRAS",
        "Descripcion": "1 botana mexicana 3 chilaquiles mini Félix 1 fajita mixta o puntas a la mexicana con 3 tortillas mexicanas y postre de la casa !",
        "Precio": "$125,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "BISTECK RANCHERO",
        "Descripcion": "Inigualable lomo a la plancha sellado con especias acompañado de una salsa a base de tomates ahumados cebolla chile se acompaña con frijol refrito guacamole y pico e'gallo (opcional tortillas o arroz)",
        "Precio": "$48,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "TAMPIQUEÑA MARÍA BONITA",
        "Descripcion": "Corte de lomo viche ( fino) de 250 gr a la parrilla .acompañada de una quesadilla , y por aparte lleva el arroz un taco en tortilla de maíz y sus respectivas salsas ",
        "Precio": "$48,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "TAMPIQUEÑA LA TEQUILANA",
        "Descripcion": "Se le conoce tampiqueña por su corte , (lomo fino) asado y va flameado con tequila.  Lleva papas a la francesa y crema de frijol refrito !!",
        "Precio": "$50,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "LOMO SAGRADO",
        "Descripcion": "Espectacular lomo de res fino relleno de tocineta acompañado de unos deliciosos portobello en reducción de tequila con popotes papas en cascos y ensalada",
        "Precio": "$50,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "LOMO EN SALSA DE TOMILLO",
        "Descripcion": "Exquisito lomo fino de 250gm bañado en una deliciosa salsa de postobello acompañada de salsa del chef papas bravas con paprika chorizo y vinagre balsámico",
        "Precio": "$50,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "CARNE MARÍA FÉLIX",
        "Descripcion": "Encantador lomo procesado con espinaca y champiñones acompañado de patatas con queso y crema chipotle y ensalada de la casa",
        "Precio": "$50,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "BURRO MEXICANO",
        "Descripcion": "1 tortilla de harina rellena de lomo de res pollo pimentón y cebolla en salsa de jitomate y queso. Sus acompañamientos guacamoles y pico e'gallo y lechuga",
        "Precio": "$38,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "BURRITO DE CAMARÓN",
        "Descripcion": "Tortilla de harina rellena de camarón con salsa veracruz aceitunas queso acompañada de totopos y salsas",
        "Precio": "$45,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "BURRITO CHIHUAHUA",
        "Descripcion": "Tortilla de harina rellena de frijol carne cebolla tomate chicharrón maduro arroz huevo frito aguacate acompañada de pico e'gallo",
        "Precio": "$33,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "BURRO JALISCO",
        "Descripcion": "Tortilla de harina rellena de pollo jitomate aceitunas maíz guacamole pico e'gallo y totopos",
        "Precio": "$31,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "BURRO TOLUCA VEGETALES",
        "Descripcion": "",
        "Precio": "$28,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "LUPITA NO TE RAJES",
        "Descripcion": "Crocante tortilla de harina acompañada de pechuga asada tomate maíz aguacate lechuga y vinagreta del chef",
        "Precio": "$33,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "POLLO EN SALSA DE UVAS Y ACEITUNAS",
        "Descripcion": "Deliciosa pechuga rellena de jamón tocineta queso su salsa es una reducción de uvas ciruelas aceitunas y vino. Su acompañamiento arroz cremoso",
        "Precio": "$40,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "POLLO EMBRUJADO",
        "Descripcion": "Pechuga de pollo a la grilla en una exquisita salsa en mole poblano acompañado de tortillas totopos gratinados y salsas de la casa",
        "Precio": "$50,000"
    },
    {
        "Categoria": "Tampiqueñas y Burritos",
        "Producto": "SALMÓN EN SALSA YUCATÁN",
        "Descripcion": "Salmón marcado en salsa de camarón con tomates vino rajitas de ají dulce risoto primavera y ensalada de la casa",
        "Precio": "$48,000"
    },
    {
        "Categoria": "Quesadillas",
        "Producto": "QUESADILLA BÁRBARA",
        "Descripcion": "Rica tortilla blanda que cuando se calienta queda tostadita Umm... rellena de mucho queso pollo carne pimentón cebolla champiñon maíz jamón tocineta y frijol acompañada de salsas y totopos",
        "Precio": "$27,000"
    },
    {
        "Categoria": "Quesadillas",
        "Producto": "QUESADILLA GUADALUPE",
        "Descripcion": "Tortilla de harina rellena de pollo maíz orágano jamón y mucho queso. Acompañada de guacamole pico e'gallo y totopos",
        "Precio": "$25,000"
    },
    {
        "Categoria": "Quesadillas",
        "Producto": "QUESADILLA LUPE",
        "Descripcion": "Tortilla de harina rellena de queso lamón tomate y albahaca",
        "Precio": "$25,000"
    },
    {
        "Categoria": "Quesadillas",
        "Producto": "QUESADILLA PUEBLA",
        "Descripcion": "Tortilla de harina rellena de tocineta ciruela jamón pollo queso acompañada de guacamole pico e'gallo y totopos",
        "Precio": "$27,000"
    },
    {
        "Categoria": "Quesadillas",
        "Producto": "QUESADILLA QUERETARO",
        "Descripcion": "Tortilla de harina rellena de chorizos frijol tocineta tabasco queso y maíz",
        "Precio": "$27,000"
    },
    {
        "Categoria": "Quesadillas",
        "Producto": "QUESADILLA TOLUCA",
        "Descripcion": "",
        "Precio": "$25,000"
    },
    {
        "Categoria": "Quesadillas",
        "Producto": "QUESADILLA MORELOS",
        "Descripcion": "Tortilla de harina rellena de pollo piña jamón y queso",
        "Precio": "$27,000"
    },
    {
        "Categoria": "Quesadillas",
        "Producto": "QUESADILLA AZTECA",
        "Descripcion": "Tortilla de harina rellena de tocineta jamón fresa y queso",
        "Precio": "$27,000"
    },
    {
        "Categoria": "Quesadillas",
        "Producto": "QUESADILLA ACAPULCO",
        "Descripcion": "Tortilla de harina rellena de pollo en salsa de champiñones con tocineta y queso",
        "Precio": "$27,000"
    },
    {
        "Categoria": "Quesadillas",
        "Producto": "QUESADILLA YUCATÁN",
        "Descripcion": "Tortilla de harina rellena de pollo tomate tocineta maíz queso y champiñones",
        "Precio": "$25,000"
    },
    {
        "Categoria": "Quesadillas",
        "Producto": "QUESADILLA TIJUANA",
        "Descripcion": "Tortilla de harina rellena de jamón champiñon tocineta maíz chorizo y pimentones ahumados acompañada de salsas de la casa",
        "Precio": "$25,000"
    },
    {
        "Categoria": "Para los Chavitos",
        "Producto": "ÑOÑO",
        "Descripcion": "Tampiqueñita con quesadilla papas y salsas",
        "Precio": "$25,000"
    },
    {
        "Categoria": "Para los Chavitos",
        "Producto": "TORTAS DEL CHAVO!!",
        "Descripcion": "Pan lechuga tomate queso jamón y salsas acompañada de totopos y queso cheddar",
        "Precio": "$23,000"
    },
    {
        "Categoria": "Postres",
        "Producto": "CAJETA",
        "Descripcion": "Tortilla de harina rellena de queso arequipe o fresa",
        "Precio": "$12,000"
    },
    {
        "Categoria": "Postres",
        "Producto": "CREPA MARÍA BONITA",
        "Descripcion": "La más deliciosa crepa con lonjas de banano y queso arequipe y helado de vainilla flameado en tequila ¡espectacular!",
        "Precio": "$25,000"
    },
    {
        "Categoria": "Postres",
        "Producto": "CHIMICHANGA AREQUIPE",
        "Descripcion": "",
        "Precio": "$18,000"
    },
    {
        "Categoria": "Bebidas",
        "Producto": "Aguas Mexicanas",
        "Descripcion": "",
        "Precio": "$10,000"
    },
    {
        "Categoria": "Bebidas",
        "Producto": "Limonada",
        "Descripcion": "",
        "Precio": "$10,000"
    },
    {
        "Categoria": "Bebidas",
        "Producto": "Jugos",
        "Descripcion": "",
        "Precio": "$10,000"
    },
    {
        "Categoria": "Bebidas",
        "Producto": "Gaseosas",
        "Descripcion": "",
        "Precio": "$6,000"
    }
];

// Función para formatear el precio
const formatPrice = (price) => {
    return price.replace(/[$.]/g, '').replace(/,/g, '.');
};

// Función para crear un elemento de menú
const createMenuItem = (item) => {
    const menuItem = document.createElement('div');
    menuItem.className = 'item-producto';
    
    const gridDiv = document.createElement('div');
    gridDiv.className = 'd-grid';
    
    const titleSpan = document.createElement('span');
    titleSpan.className = 'item-titulo';
    titleSpan.textContent = item.Producto;
    
    const priceSpan = document.createElement('span');
    priceSpan.className = 'item-precio';
    priceSpan.textContent = formatPrice(item.Precio);
    
    const descSpan = document.createElement('span');
    descSpan.className = 'descripcion';
    descSpan.textContent = item.Descripcion;
    
    gridDiv.appendChild(titleSpan);
    gridDiv.appendChild(priceSpan);
    menuItem.appendChild(gridDiv);
    menuItem.appendChild(descSpan);
    
    return menuItem;
};

// Función para llenar cada sección del menú
const fillMenuSection = (items, categoryId) => {
    const section = document.getElementById(categoryId);
    if (!section) return;
    
    const container = section.querySelector('.col-md-12') || section;
    
    // Limpiar elementos existentes excepto el título
    const title = container.querySelector('h1');
    container.innerHTML = '';
    if (title) container.appendChild(title);
    
    // Agregar los nuevos elementos
    items.forEach(item => {
        container.appendChild(createMenuItem(item));
    });
};

// Función principal para cargar el menú
const loadMenu = () => {
    try {
        // Mapear las categorías a los IDs de las secciones
        const categoryMapping = {
            'Entradas': 'entradas',
            'Sopas': 'sopas',
            'Pa\' Taquiar': 'pa-taquiar',
            'Chimichangas': 'chimichangas',
            'Para Compartir': 'para-compartir',
            'Tampiqueñas y Burritos': 'tampiquenhas-burritos',
            'Quesadillas': 'quesadillas',
            'Para los Chavitos': 'para-los-chavitos',
            'Postres': 'postres',
            'Bebidas': 'bebidas'
        };
        
        // Agrupar items por categoría
        const groupedItems = menuData.reduce((acc, item) => {
            if (!acc[item.Categoria]) {
                acc[item.Categoria] = [];
            }
            acc[item.Categoria].push(item);
            return acc;
        }, {});
        
        // Llenar cada sección del menú
        Object.entries(groupedItems).forEach(([category, items]) => {
            const sectionId = categoryMapping[category];
            if (sectionId) {
                fillMenuSection(items, sectionId);
            }
        });
        
    } catch (error) {
        console.error('Error cargando el menú:', error);
    }
};

// Cargar el menú cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadMenu);