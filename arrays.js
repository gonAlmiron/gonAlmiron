const arrayBancos = ["MACRO", "SANTANDER", "BBVA" , "SUPERVIELLE" , "CREDICOOP", "BANCO NACION"];
const arrayCuotas = ["12", "24", "48"];


const inputMonto = document.getElementById("monto");
const inputCuotas = document.getElementById("inputCuota");
const inputBanco = document.querySelector("#inputBanco");

const titulo = document.getElementById("titulo");
titulo.innerText = "Simulador de préstamos";
const interes = parseFloat(1.63);    

const contenidoDOM = document.querySelector("#contenido");

const URL = `js/prestamos.json`;

let btnCotizar = document.getElementById("btnCotizar");

const btnAbrirPopup = document.getElementById('btn-abrir-popup');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const btnCerrarPopup = document.getElementById('btn-cerrar-popup');

const inputNombre = document.querySelector("#inputNombre");
const inputApellido = document.querySelector("#inputApellido")
const inputDni = document.querySelector("#inputDni")
const inputEmail = document.querySelector("#inputEmail")
const registrarPrestamo = document.querySelector("#registrarPrestamo")


btnCotizar.addEventListener("click", ()=> {
    calcularCuotas();
    setTimeout(() => {
        overlay.classList.add('active');
        popup.classList.add('active');    
     }, 4000);

})

registrarPrestamo.addEventListener("click",()=>{
    guardarRegistro();
})

btnCerrarPopup.addEventListener("click", ()=> {
    overlay.classList.remove('active');
        popup.classList.remove('active');  
})

let valorCuota = document.getElementById("valorCuota")

const calcularCuotas = ()=> {  
    if (inputMonto.value !== "") {
        let montoPrestamo = inputMonto.value
        let cuotasPrestamo = inputCuotas.value
        let bancoPrestamo = inputBanco.value
        let valorDeLaCuota = (montoPrestamo / cuotasPrestamo) * interes
            valorDeLaCuota = valorDeLaCuota.toFixed(2)
            valorCuota.innerText = ""
        
            Swal.fire("Su solicitud es de " + "$" +  montoPrestamo + " a devolver en " + cuotasPrestamo + " cuotas. " + "La tasa de interés es del 63% mediante el banco " + bancoPrestamo + "." );
            
            
            guardarDatos();
        return valorCuota.innerText = `$ ${valorDeLaCuota}`;
        
    }
    else {
        Swal.fire("Complete todos los datos solicitados.")
    }
}

const cargarCuotas = ()=> {
    let optionCuotas
        arrayCuotas.forEach(element => {
            optionCuotas += `<option value="${element}"> ${element} </option>`
        });
        return optionCuotas
}

inputCuotas.innerHTML = cargarCuotas(); 

const cargarBancos = ()=> {
    let optionBanco
        arrayBancos.forEach(element => {
            optionBanco += `<option value="${element}"> ${element} </option>`
        });
        return optionBanco
}

inputBanco.innerHTML = cargarBancos();



const prestamo = {  monto: inputMonto.value,
                    cuotas: inputCuotas.value, 
                    banco: inputBanco.value};

function guardarDatos() {
    localStorage.clear();
    let str = JSON.stringify(prestamo);
    localStorage.setItem("prestamo", str)
}

const registroPrestamo = { nombre: inputNombre.value,
                            apellido: inputApellido.value,
                            dni: inputDni.value,
                            email: inputEmail.value}

function guardarRegistro() {
    let str = JSON.stringify(registroPrestamo);
    localStorage.setItem("registroPrestamo", str)
}

function recuperarDatos () {
    if (localStorage.getItem("prestamo")) {
        const prestamo = JSON.parse(localStorage.getItem("prestamo")) || []

        inputMonto.value = prestamo.monto 
        inputCuotas.value = prestamo.cuotas
        inputBanco.value = prestamo.banco
        
    }
}

    

    //  btnAbrirPopup.addEventListener('click', () => {
    //     overlay.classList.add('active');
    //     popup.classList.add('active');
    // });
    
    // btnCerrarPopup.addEventListener('click',(e)=> {
    //     e.preventDefault();
    //     overlay.classList.remove('active');
    //     popup.classList.remove('active');
    // });


    // const obtenerContenido = (URL) => {
        //     let prestamosAmostrar = ""
        //         fetch(URL)
        //         .then( (response)=> response.json() )
        //         .then( (data)=> {
                    
        //             for (contenido of data) 
        //                 prestamosAmostrar += retornoPrestamo(contenido)
        //                 contenidoDOM.innerHTML = prestamosAmostrar
        //             })
        //     }
        //         obtenerContenido();
        
        //     document.addEventListener("DOMContentLoaded", ()=> {
        //         setTimeout(() => {
        //            obtenerContenido(URL)      
        //         }, 2000);
        //      })
// const retornoPrestamo = (contenido)=> {
//     const {monto, cuotas, banco} = contenido
//     return `<div class="col s12 m6 l3">
              

//                     <div class="card-content black">
//                        <p class="yellow-text">MONTO: <span class="white-text">${monto}</span></p>
//                        <p class="yellow-text">CUOTAS: <span class="white-text">${cuotas}</span></p>
//                        <p class="yellow-text">BANCO <span class="white-text">${banco}</span></p>
//                     </div>
                
//             </div>`
//  }




function calcularInteres () {
        conInteres (inputMonto, interes)
};

function conInteres (param1, param2) {
    return parseFloat(param1) * parseFloat(param2) || "Error en la cotización"
};

/*

alert("Su solicitud es de"+ " ARS " + inputMonto + ". "  + "La tasa de interés es del 63%.");
alert("Su pago sería de ARS " + conInteres(inputMonto, interes).toFixed(2) + " a devolver en " + cantCuotas + " cuotas.");

*/


// const botonMonto = document.getElementById("botonUno")
// botonMonto.addEventListener("click", ()=> {
 
//     Swal.fire("Usted ha solicitado un préstamo por ARS: " + inputMonto.value + ".") || "Error"

// })


// let botonCuotas = document.getElementById("botonDos")

// botonCuotas.addEventListener("click", ()=> {

//     inputCuotas.value == 12 || inputCuotas.value == 24 || inputCuotas.value == 48 ? 
//         Swal.fire("Usted realizará su pago en " + inputCuotas.value + " cuotas." ?? "No se reconoce la cantidad de cuotas" ) :
//         Swal.fire("Ingrese una cantidad válida de cuotas.")

//     })



// function cargarBancos() {
//     listadoBancos.innerHTML = ""
//     for (const banco of arrayBancos) {
//         const li = document.createElement("li")
//               li.className = "bancos-item"
//               li.addEventListener("click", ()=> {
//               mostrarBanco(`${banco}`)
//               })
//               li.innerText = banco
//               localStorage.setItem("banco", banco)
//               listadoBancos.append(li)
//     }
// };

// cargarBancos()


// function mostrarBanco(bank) {
//     Swal.fire("Usted ha elegido" + bank )
// };


