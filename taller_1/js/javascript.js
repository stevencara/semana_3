

//Punto 1: Crea un arreglo con contenga la informacion "bread", "cheese", "hummus", "noodles"
let array1 = ["bread", "cheese", "hummus", "noodles"]

    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i]);
        
    }


//Punto 2: Crea un array de nombre diasSemana para contener 7 elementos con los nombres de los dias comenzando por lunes hasta domingo
let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

    for (let j = 0; j < diasSemana.length; j++) {
        console.log(diasSemana[j]);
        
    }


//Punto 3: Crea un objeto que contenga informacion de 5 registros de usuarios con los datos e nombre, apellido, telefono, edad
let users = [
                {
                    "id" : 1,
                    "nombre" : "Felipe",
                    "apellido" : "Mayorga",
                    "telefono" : 3153697852,
                    "edad" : 26
                },
                {
                    "id" : 2,
                    "nombre" : "Alejandro",
                    "apellido" : "Gonzalez",
                    "telefono" : 3168521468,
                    "edad" : 28 
                },
                {
                    "id" : 3,
                    "nombre" : "Mariana",
                    "apellido" : "Vasquez",
                    "telefono" : 3198567486,
                    "edad" : 24 
                },
                {
                    "id" : 4,
                    "nombre" : "Nicolas",
                    "apellido" : "Chazarreta",
                    "telefono" : 3204528574,
                    "edad" : 29 
                },
                {
                    "id" : 5,
                    "nombre" : "Eliana",
                    "apellido" : "Valero",
                    "telefono" : 3115227482,
                    "edad" : 25 
                }
];
    
    for (let k = 0; k < users.length; k++) {
        console.log(users[k]);
        
    }


//Punto 4: Crear un Objeto que contenga información de 5 estudiantes con los datos de nombre, apellido, telefono, edad, materias se pueda tener la información de materias matriculadas y Hobbies Favoritos.
let usuarios = [
                    {
                        "id" : 1,
                        "nombre" : "Felipe",
                        "apellido" : "Mayorga",
                        "telefono" : 3153697852,
                        "edad" : 26,
                        "materias matriculadas" : ["calculo", "trigonometría", "algebra"],
                        "hobbies" : ["videojuegos", "billar"]
                    },
                    {
                        "id" : 2,
                        "nombre" : "Alejandro",
                        "apellido" : "Gonzalez",
                        "telefono" : 3168521468,
                        "edad" : 28,
                        "materias matriculadas" : ["emprendimiento", "comunicacion asertiva", "salud ocupacional"],
                        "hobbies" : ["zumba", "levantamiento de pesas"]
                    },
                    {
                        "id" : 3,
                        "nombre" : "Mariana",
                        "apellido" : "Vasquez",
                        "telefono" : 3198567486,
                        "edad" : 24,
                        "materias matriculadas" : ["literatura", "Antropología", "Sociología"],
                        "hobbies" : ["lectura", "dibujo", "fotografia"]
                    },
                    {
                        "id" : 4,
                        "nombre" : "Nicolas",
                        "apellido" : "Chazarreta",
                        "telefono" : 3204528574,
                        "edad" : 29,
                        "materias matriculadas" : ["Arquitectura", "Arte y diseño"],
                        "hobbies" : ["meditacion", "pilates", "yoga"]
                    },
                    {
                        "id" : 5,
                        "nombre" : "Eliana",
                        "apellido" : "Valero",
                        "telefono" : 3115227482,
                        "edad" : 25,
                        "materias matriculadas" : ["ingles", "frances", "portugues"],
                        "hobbies" : ["baloncesto", "natacion"]
                    }
                ];

                for (let l = 0; l < usuarios.length; l++) {
                    console.log(usuarios[l]);
                    
                }

//Punto 5: Construir un arreglo con 4 posiciones y que la posicion 4 sea otro arreglo
let array2 = ["audiovisuales", "arte", "habilidades blandas", ["atletismo", "gimnasio", "baloncesto", "futbol", "tennis", "ajedrez"], "marketing","computacion"];
                for (let m = 0; m < array2.length; m++) {
                    console.log(array2[m]);
                    
                }

//Punto 6: Recorrer los arreglos y objetos realizados anteriormente.

//Punto 7: Consumir la siguiente Api https://jsonplaceholder.typicode.com/posts
function getInfo() {
    let charCapture = document.getElementById("charCapture").value

let url = `https://jsonplaceholder.typicode.com/posts/${charCapture}`

fetch(url)
    .then(res => res.json())
    .then(object => {
        
        let html = `<div class="row m-5">`
        for (let datos of object) {
            
            html += `<div class="col-4 border">
                        <h4> 
                            <b> ${datos.title} </b> 
                        </h4>
                        <p> 
                            ${datos.body} 
                        </p>
                     </div>`
            //html = html + ` B `
        }

        html += `</div>`

        document.getElementById("charContent").innerHTML = html

    })
}



