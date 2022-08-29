var articulos = [
  {id:1,nombre:"Artículo 1",precio:29.99, cantidad:32 ,imagen:"https://pymes2021.azurewebsites.net/imagenes/art01.jpg"},
  {id:2,nombre:"Artículo 2",precio:12.99, cantidad:12 ,imagen:"https://pymes2021.azurewebsites.net/imagenes/art02.jpg"},
  {id:3,nombre:"Artículo 3",precio:45.99, cantidad:32 ,imagen:"https://pymes2021.azurewebsites.net/imagenes/art03.jpg"},
  {id:4,nombre:"Artículo 4",precio:238.99, cantidad:75,imagen:"https://pymes2021.azurewebsites.net/imagenes/art04.jpg"},
  {id:5,nombre:"Artículo 5",precio:77.99, cantidad:211,imagen:"https://pymes2021.azurewebsites.net/imagenes/art05.jpg"},
  {id:6,nombre:"Artículo 6",precio:84.99, cantidad:4  ,imagen:"https://pymes2021.azurewebsites.net/imagenes/art06.jpg"},
];

function cargarArticulos() {
  var divArticulos = document.getElementById("divArticulos");
  var tablaHtml = '<table class="table table-hover">'; 
  tablaHtml += `<tr> 
  <td>ID</td>
  <td>Nombre</td>
  <td>Precio</td>
  <td>Cantidad</td>
  <td>Imagen</td>
  </tr>`
  const filas = articulos.map (a => `<tr>
  <td>${a.id}</td>
  <td>${a.nombre}</td>
  <td>${a.precio}</td>
  <td>${a.cantidad}</td>
  <td><img src="${a.imagen}" width=100px heigth=100px></td>
  </tr>`)
  filas.forEach(f => {
    tablaHtml += f;
  })
  tablaHtml += "<table>";
  divArticulos.innerHTML = tablaHtml;
};

document.getElementById("btnCargarArticulos").onclick = cargarArticulos;