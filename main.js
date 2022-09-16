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

let contenedor = document.getElementById("products");                   // Traemos el nodo que tiene el atributo product.
let butt1 = document.getElementById("btn1");                            // Traemos el nodo que tiene el atributo btn1.
let butt2 = document.getElementById("btn2");                            // Traemos el nodo que tiene el atributo btn1.

const listado = () => {                                                 // Creamos la funcion listado, para recorrer el array y llamarla mas adelante.
    cars.forEach(item => {                                              // Recorremos todo el Array compuesto por objetos.
        let div = document.createElement("div");                        // Creamos un div para introducir el listado de productos.
        div.innerHTML =    `<h3> Marca: ${item.brand} </h3>            
                            <p> Modelo: ${item.model} </p>      
                            <b> precio $${item.price} </b>
                            <br> \n <br> `;                              // introducimos en el HTML el listado de productos.
        contenedor.append(div);                                          // Insertamos el contenido en la etiqueta div que se va creando anteriormente.
        })
    };
butt1.addEventListener("click", listado);                               // Utilizando el Evento Clic Creamos el listado de productos.
butt2.addEventListener("click",() => {                                  // Utilizando el Evento Clic Borramos el listado de productos.
contenedor.innerHTML  = "";
});

/* ---------- Opcion para ingresar un Producto ---------- */      

               
let formulario1 = document.getElementById("form");                              // Traemos el nodo que tiene el atributo form.
let contenedor2 = document.getElementById("products2");                         // Traemos el nodo que tiene el atributo product.

formulario1.addEventListener("submit", (e) => {                                 // Utilizando el evento "submit" creamos una funcion para extraer los datos tal cual fueron introducidos en la pagina.
    e.preventDefault();
    let formVar = e.target.children;
    let input1 = formVar[1].value.toUpperCase();                                // Asginamos a la variable  input1 el el valor(value) de la etiqueta(tag) en la posicion 1 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.   
    //let input1 = document.getElementById("brandField").value;                 // Otra forma de traer el contenido del imput pero no se si es correcto.
    let input2 = formVar[4].value.toUpperCase();                                // Asginamos a la variable  input2 el el valor(value) de la etiqueta(tag) en la posicion 4 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.
    let input3 = formVar[7].value;                                              // Asginamos a la variable  input3 el el valor(value) de la etiqueta(tag) en la posicion 7 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.                   
    let input4 = formVar[10].value;                                             // Asginamos a la variable  input3 el el valor(value) de la etiqueta(tag) en la posicion 10 del nodo padre "form", nos devuelve el texto tal cual lo escribimos.
    let input5 = formVar[13].value;
    cars.push(new Products({brand: `${input1}`, model: `${input2}`, year: `${input3}`, price: `${input4}`, stock: `${input5}`, sold: false}));
    cars.forEach(item2 => {                                                     // Recorremos todo el Array con el nuevo producto.
        let div1 = document.createElement("div" && "p");                        // Creamos la etiqueta div y p.
        div1.innerHTML = item2.showCars();                                      // introducimos el listado en el HTML. 
        contenedor2.append(div1);                                               // Agregamos el contenido a la etiqueta div > p.
    })
});
               

/* ---------- Opcion para buscar un Producto ---------- */      

let formulario2 = document.getElementById("form2");                             // Traemos el nodo que tiene el atributo form2.
let filters = document.getElementById("filter");                                // Traemos el nodo que tiene el atributo filter.

formulario2.addEventListener("submit", (e) => {                                 // Utilizando el evento "submit" creamos una funcion para extraer los datos tal cual fueron introducidos en la pagina.
    e.preventDefault();                                                         // Prevenimos que la pagina se recargue al dar click en submit.
    let findBrand = e.target.children;                                          // Capturamos las entradas del formulario y la asignamos a la variable findBrand, nos trae un HTML Collection.                           
    let brandValue = findBrand[0].value;                                        // Asginamos a la variable  brandValue el el valor(value) de la etiqueta(tag) en la posicion 0 del nodo padre "form2", nos devuelve el texto tal cual lo escribimos.   
    const result = cars.filter(car => car.brand === brandValue.toUpperCase());  // Usamos el Metodo Filter para que busque en el Array de productos la marca que necesitamos.
    result.forEach(item3 => {                                                   // Recorremos el array que nos entrego el metodo Filter.
        let p = document.createElement("p");                                    // Creamos el elemento parrafo.
        p.innerHTML = item3.showCars();                                         // introducimos el listado en el HTML.
        filters.append(p);                                                      // Agregamos el contenido a la etiqueta p.
    });
});            

    