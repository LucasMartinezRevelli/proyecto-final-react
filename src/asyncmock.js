const misProductos = [
  { id: "1", nombre: "Procesador Ryzen 3 3300X", precio: 500, img: "../img/yerba.jpg", idCat: "2" },
  { id: "2", nombre: "Procesador Ryzen 5 5600X", precio: 200, img: "../img/fideos.jpg", idCat: "2" },
  { id: "3", nombre: "Procesador Ryzen 7 5800X", precio: 300, img: "../img/arroz.jpg", idCat: "2" },
  { id: "4", nombre: "Procesador Ryzen 9 5900X", precio: 900, img: "../img/aceite.jpg", idCat: "2" },
  { id: "5", nombre: "Placa madre Aorus b450", precio: 500, img: "../img/yerba.jpg", idCat: "3" },
  { id: "6", nombre: "Placa madre Aorus b550", precio: 200, img: "../img/fideos.jpg", idCat: "3" },
  { id: "7", nombre: "Placa madre Asrock b450", precio: 300, img: "../img/arroz.jpg", idCat: "3" },
  { id: "8", nombre: "Placa madre Gigabyte b550", precio: 900, img: "../img/aceite.jpg", idCat: "3" },
  { id: "9", nombre: "Placa de video Radeon 5700X", precio: 500, img: "../img/yerba.jpg", idCat: "4" },
  { id: "10", nombre: "Placa de video Radeon 6700X", precio: 200, img: "../img/fideos.jpg", idCat: "4" },
  { id: "11", nombre: "Placa de video Nvidia 3080", precio: 300, img: "../img/arroz.jpg", idCat: "4" },
]

export const getProductos = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(misProductos);
      }, 100)
  })
}


/*Creamos una función similar a la anterior pero que solo nos retorne un solo item*/

export const getUnProducto = (id) => {
  return new Promise(resolve => {
      setTimeout(() => {
          const producto = misProductos.find(item => item.id === id);
          resolve(producto);
      }, 100)
  })
}

//Creamos una función que retorne toda una categoria: 

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise(resolve => {
      setTimeout(() => {
          const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
          resolve(productosCategoria);
      }, 100)
  })
}