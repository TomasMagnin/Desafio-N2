// Creamos primero la clase constructora para crear objetos de nuestros productos y añadir
// sus especificaiones de forma dinamica.

class Products{
    constructor(info){
        this.brand = info.brand;
        this.model = info.model;
        this.year = info.year;
        this.price = info.price;
        this.stock = info.stock;
        this.sold = false;
    }
    vender(){
        this.stock = this.stock - 1;
        this.sold = true;
    }

    showCars(){
        return `Brand: ${this.brand} - Modelo: ${this.model} - Año ${this.year} - $ ${this.price} - Stock ${this.stock} `
    }
} 


// Pusheamos al Array cars, los objetos a partir de la clase constructor.

let cars = [];

cars.push(new Products({brand: "AUDI", model: "A3", year: 2015, price: 25000, stock: 4,}));
cars.push(new Products({brand: "BMW", model: "M1", year: 2012, price: 55000, stock: 2,}));
cars.push(new Products({brand: "DODGE", model: "RAM", year: 2014, price: 65000, stock: 8,}));
cars.push(new Products({brand: "FIAT", model: "CRONOS", year: 2020, price: 13000, stock: 20,}));
cars.push(new Products({brand: "RENAULT", model: "OROCH", year: 2016, price: 15000, stock: 10,}));
cars.push(new Products({brand: "FORD", model: "FOCUS", year: 2015, price: 10000, stock: 15}));
cars.push(new Products({brand: "CHEVROLET", model: "S10", year: 2010, price: 35000, stock: 6}));
cars.push(new Products({brand: "TOYOTA", model: "HILLUX", year: 2019, price: 45000, stock: 20}));
cars.push(new Products({brand: "VOLKSWAGEN", model: "GOLF", year: 2022, price: 30000, stock: 12}));




  /* ---------- Creamos la funcion y evento para listar los productos---------- */      

let contenedor = document.getElementById("producte");               // Traemos el nodo que tiene el atributo product
let butt1 = document.getElementById("btn1");                        // Traemos el nodo que tiene el atributo product
let butt2 = document.getElementById("btn2");

function listado (){                                                // Creamos la funcion listado, para recorrer el array y llamarla mas adelante
    for(let item of cars){                                          // Recorremos todo el Array compuesto por objetos.
    let div = document.createElement("div");                        // Creamos un div para introducir el listado de productos.
    div.innerHTML =    `<h3> Marca: ${item.brand} </h3>            
                        <p> Modelo: ${item.model} </p>      
                        <b> precio $${item.price} </b>
                        <br> \n <br> `;                              // introducimos en el HTML el listado de productos.
     contenedor.append(div);                                        // Insertamos el contenido en la etiqueta div que se va creando anteriormente.
    }
};
              
butt1.addEventListener("click", listado);                           // Utilizando el Evento Clic Creamos el listado de productos.
butt2.addEventListener("click",() => {                              // Utilizando el Evento Clic Borramos el listado de productos.
    contenedor.innerHTML  = "";
});



                
            
/* ---------- Opcion para ingresar un Producto ---------- */      

               


                /* let brandAdd = prompt("Ingrese la Marca").toUpperCase();    // Ingresamos los datos por consola para añadir un nuevo producto.
                let modelAdd = prompt("Ingrese el Modelo").toUpperCase();
                let yearAdd  = prompt("Ingrese Año");
                let priceAdd = prompt("Ingrese Precio")
                let stockAdd = prompt("Ingrese la cantidad de Stock")      // En la siguiente linea Pusheamos el nuevo producto a nuestro listado.
                cars.push(new Products({brand: `${brandAdd}`, model: `${modelAdd}`, year: `${yearAdd}`, price: `${priceAdd}`, stock: `${stockAdd}`, sold: false}));
                
                let contenedor2 = document.getElementById("producte");      // Traemos el nodo que tiene el atributo product.
                cars.forEach(item2 => {                                     // Recorremos todo el Array con el nuevo producto.
                    let div1 = document.createElement("div" && "p");        // Creamo la etiqueta div y p.
                    div1.innerHTML = item2.showCars();                      // introducimos el listado en el HTML.
                    contenedor2.append(div1);                               // Agregamos el contenido a la etiqueta div > p.
                }); */



/* ---------- Opcion para buscar un Producto ---------- */      

               
                
                
                let formulario2 = document.getElementById("form2");
                let filters = document.getElementById("filter"); 

                formulario2.addEventListener("submit", (e) => {
                    e.preventDefault();
                    let findbrand = e.target.children;
                    findbrand = findbrand.toUpperCase();
                    const result = cars.filter(car => car.brand === findbrand);


                    result.forEach(item3 => {                                   // Recorremos el array que nos entrego la funcion anterior.
                        let p = document.createElement("p");                    // Creamos el elemento parrafo.
                        p.innerHTML = item3.showCars();                         // introducimos el listado en el HTML.
                        filters.append(p);                                      // Agregamos el contenido a la etiqueta p.
                    });
                });            


                


               /*  let filters = document.getElementById("filter");            // Traemos el nodo que tiene el atributo filter.
                let findbrand = prompt("Ingrese la Marca a Buscar, EJ: audi");    // Ingresamos la marca que deseamos buscar.
                findbrand = findbrand.toUpperCase();                        // Convertimos la entrada de texto a mayuscula.
                const result = cars.filter(car => car.brand === findbrand); // Usamos el arrow f para buscar la marca.

                result.forEach(item3 => {                                   // Recorremos el array que nos entrego la funcion anterior.
                    let p = document.createElement("p");                    // Creamos el elemento parrafo.
                    p.innerHTML = item3.showCars();                         // introducimos el listado en el HTML.
                    filters.append(p);                                      // Agregamos el contenido a la etiqueta p.
                }); */
    