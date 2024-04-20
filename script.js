function toggleLista() {
  // Crear una nueva instancia de XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Configurar la solicitud GET al archivo buscar.php
  xhr.open('GET', 'archivo.php', true);

  // Configurar la función de devolución de llamada cuando la solicitud se complete
  xhr.onload = function () {
      if (xhr.status === 200) {
          try {
              // Intentar analizar la respuesta JSON
              var responseData = JSON.parse(xhr.responseText);

              // Verificar que la respuesta sea un array
              if (Array.isArray(responseData)) {
                  // Verificar si hay elementos en la respuesta
                  if (responseData.length > 0) {
                      // Generar HTML para la lista
                      var listaHTML = responseData.map(function (item) {
                          return '<li>ID: ' + item.idLibro + ', Título: ' + item.libTitulo + '</li>';
                      }).join('');

                      // Actualizar la lista con los resultados
                      document.getElementById('miLista').innerHTML = listaHTML;
                  } else {
                      console.log('La respuesta no contiene datos.');
                  }
              } else {
                  console.log('La respuesta no es un array válido.');
              }
          } catch (error) {
              console.error('Error al analizar la respuesta JSON:', error);
          }
      } else {
          console.error('Error al realizar la solicitud. Estado:', xhr.status);
      }
  };

  // Manejar errores de red
  xhr.onerror = function () {
      console.error('Error de red al intentar realizar la solicitud.');
  };

  // Enviar la solicitud
  xhr.send();
}


  