// Función para parsear el CSV
function parseCSV(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(';');
    return lines.slice(1).map(line => {
      const values = line.split(';');
      return headers.reduce((obj, header, index) => {
        obj[header.trim()] = values[index] ? values[index].trim() : '';
        return obj;
      }, {});
    });
  }
  
  // Función para generar el HTML del menú
  function generateMenuHTML(menuData) {
    let html = '';
    let currentCategory = '';
  
    menuData.forEach(item => {
      if (item.categoria !== currentCategory) {
        if (currentCategory !== '') {
          html += '</div></div>';
        }
        currentCategory = item.categoria;
        html += `
          <div id="${currentCategory.toLowerCase().replace(/ /g, '-')}" class="container">
            <h1 class="text-center my-5 deco">${currentCategory}</h1>
            <div class="row">
              <div class="col-md-12 col-sm-12">
        `;
      }
  
      html += `
        <div class="item-producto">
          <div class="d-grid">
            <span class="item-titulo">${item.nombre}</span>
            <span class="item-precio">${parseInt(item.precio).toLocaleString()}</span>
          </div>
          <span class="descripcion">${item.descripcion}</span>
        </div>
      `;
    });
  
    html += '</div></div>';
    return html;
  }
  
  // Función para cargar el CSV y actualizar el HTML
  function loadCSVAndUpdateMenu() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const menuData = parseCSV(xhr.responseText);
          const menuHTML = generateMenuHTML(menuData);
          document.getElementById('menu-container').innerHTML = menuHTML;
        } else {
          console.error('Error al cargar el archivo CSV');
        }
      }
    };
    xhr.open('GET', 'menu.csv', true);
    xhr.send();
  }
  
  // Llamar a la función cuando la página se carga
  window.onload = loadCSVAndUpdateMenu;