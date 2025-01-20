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
  const loadMenu = async () => {
    try {
      const response = await fetch('menu-data.json');  // Asegúrate de que la ruta al JSON sea correcta
      const menuData = await response.json();
      
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