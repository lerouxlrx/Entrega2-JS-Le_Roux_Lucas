
alert ('¡Bienvenido a Tu Gestión! Registra tus actividades, anota tus tareas, programa tus recordatorios y conocé en detalle Tu Gestión');

const imprimirLog = (dato) => console.log(dato);
let chances = 1;
let pregRespondidas = 0;
let numGanador = Math.floor(Math.random() * 10) + 1;
let ganador = false;
let numElegido
function sumatoriaChances (pregunta) {
    if (pregunta != 0) {
        chances++;
        pregRespondidas++;
    }
}


const nombre = prompt ('Ingresa tu nombre y participa: ');
imprimirLog ('Nombre: '+nombre);


let email;
    do {
        email = prompt ('Necesitamos tu correo, ganas y ¡recibis el premio al instante! ');
    } while (email == '' );
imprimirLog('E-mail: '+email);

const sumaChances = prompt ('Gracias por participar, enviaremos los resultados a '+email+'. Tenes 1 chance, contesta unas preguntas y suma más! Responde "SI", si queres aumentar tus chances: ');

if (sumaChances.toLocaleLowerCase() == 'si') {
    alert ('Responde del 1 al 5 siendo 1 Nada Importante y 5 Muy Importante. Empecemos!');
    imprimirLog ('Suma Chances: '+sumaChances);

    let pregImportancia;
    do {
        pregImportancia = prompt ('Para vos, que tan importante es registrar toda Tu Gestión? Recorda responder del 1 al 5. Pone 0 si queres saltear la pregunta');
    } while (!(pregImportancia >=0 && pregImportancia <=5));
    sumatoriaChances (pregImportancia);

    let pregOrden;
    do {
        pregOrden = prompt ('Para los registros de Tu Gestión, que tan importante consideras el orden? Recorda responder del 1 al 5. Pone 0 si queres saltear la pregunta.');
    } while (!(pregOrden >=0 && pregOrden <=5));
    sumatoriaChances (pregOrden);

    let pregNotificaciones;
    do {
        pregNotificaciones = prompt ('Que tan importante es tener notificaciones para que no se pase nada de Tu Gestión? Recorda responder del 1 al 5. Pone 0 si queres saltear la pregunta.');
    } while (!(pregNotificaciones >=0 && pregNotificaciones <=5));
    sumatoriaChances (pregNotificaciones);

    let pregReporte;
    do {
        pregReporte = prompt ('Consideras importante tener reportería que te describa en detalle Tu Gestión? Recorda responder del 1 al 5. Pone 0 si queres saltear la pregunta.');
    } while (!(pregReporte >=0 && pregReporte <=5));
    sumatoriaChances (pregReporte);

    imprimirLog ('Importancia: '+pregImportancia);
    imprimirLog ('Orden: '+pregOrden);
    imprimirLog ('Notificaciones: '+pregNotificaciones);
    imprimirLog ('Reporteria: '+pregReporte);
    alert('Respondiste '+pregRespondidas+' preguntas, por lo que quedaste con '+chances+' chances. ¡Vamos al sorteo!');
} else {
    imprimirLog ('Suma Chances: No');
    alert('No respondiste ninguna pregunta, tenes '+chances+' chance. ¡Vamos al sorteo!');
}

imprimirLog ('Chances para sorteo: '+chances);

while (chances != 0) {
    let numElegido = parseInt(prompt ("Adivina el número del 1 al 10, te quedan " + (chances) + " intentos"));
    if (numGanador==numElegido) {
        alert('¡¡¡Ganaste!!! Tenemos un mes de prueba gratis de Tu Gestión FULL. Enviaremos todo al correo que nos proporcionaste. Te adelantamos una mini prueba');
        chances--
        ganador = true;
        break;
    } else if (isNaN(numElegido) || numElegido < 1 || numElegido > 10){
        alert('Elegí un numero del 1 al 10.');
    } else if (chances == 1){
        alert('Lo lamentamos, el número ganador era el '+ numGanador +'. Te quedaste sin chances, pero no te preocupes! Recomendanos a un compañero de trabajo, para que pueda participar con su correo y ambos prueben Tu Gestión.')
        chances--
    } else if (numGanador > numElegido){
        alert('Chico, chiquito, pequeño, tu numero no es el correcto.');
        chances--;
    } else if (numGanador < numElegido || numElegido <= 10){
        alert('Grande, grandote, tu numero es enorme.');
        chances--;
    }
}

imprimirLog ('Ganador : '+ganador);
imprimirLog ('Numero Ganador: '+numGanador);
imprimirLog ('Numero Elegido: '+numElegido);
imprimirLog ('Chances restantes: '+chances);

class Contacto {
    constructor (nombre, apellido, telefono, correo, activo) {
    this.nombre = nombre.toLocaleUpperCase()
    this.apellido = apellido.toLocaleUpperCase()
    this.telefono = parseInt(telefono)
    this.correo = correo.toLowerCase()
    this.actividad = []
    this.nombreCompleto = this.apellido+', '+this.nombre
}
agregarActividad(actividad) {
    this.actividad.push(actividad);
}
}

function validadorRespuesta (menor,mayor,numValidar) {
    if (numValidar <= mayor && numValidar >= menor){
        return true;
    } else {
        return false;
    }
}

const Contactos = []
let crearContacto
let sinContactos
let conContactos

function crearNuevoContacto () {
    let crearContacto

    do {
    crearContacto = prompt('Quieres crear un contacto nuevo? \nResponde utilizando los numeros:\n1. Si\n2. No')
    } while (!validadorRespuesta(1,2,crearContacto))

    while (crearContacto.toLowerCase() == 1) {
    Contactos.push(new Contacto(prompt('Nombre: '),prompt('Apellido: '),prompt('Telefono, solo numero sin 0 y sin 15. Por ejemplo: 3515111110'),prompt('Correo: ')));
    do {
        crearContacto = prompt('Quieres crear un contacto nuevo? \nResponde utilizando los numeros:\n1. Si\n2. No')
    } while (!validadorRespuesta(1,2,crearContacto))
    }
}

function comoContinuar () {
    if (Contactos.length == 0) {
        do {
            sinContactos = prompt ('No se registraron contactos. Como continuamos?\nResponde utilizando los numeros:\n1. Ir a crear contacto\n2. Finalizar prueba')
        } while (!validadorRespuesta(1,2,sinContactos))
    } else if (Contactos.length == 1){
        do {
            sinContactos = ''
            conContactos = prompt ('Se registro '+Contactos.length+' contacto. Como continuamos?\nResponde utilizando los numeros:\n1. Ir a crear actividades sobre contacto\n2. Ir a crear otros contactos.\n3. Finalizar prueba.')
        } while (!validadorRespuesta(1,3,conContactos))
    } else {
        do {
            sinContactos = ''
            conContactos = prompt ('Se registraron '+Contactos.length+' contactos. Como continuamos?\nResponde utilizando los numeros:\n1. Ir a crear actividades sobre contactos\n2. Ir a crear otros contactos.\n3. Finalizar prueba.')
       } while (!validadorRespuesta(1,3,conContactos))
    }
        
}

function mostrarNombres() {
        let listaNombres = "\n";
        for (let i = 0; i < Contactos.length; i++) {
            listaNombres += `${i + 1}. ${Contactos[i].nombre}\n`;
        }
        
        return listaNombres;
    }

function crearActividad() {
    let listaContactos = mostrarNombres()   
    let contactoEncontrado
    let crearActividad
    do {
        let nombreBuscado = prompt('Los nombres de tus contactos son: '+listaContactos+'\nEscribi el nombre a quien quieras cargarle una actividad: ')
        contactoEncontrado = Contactos.find(Contacto => Contacto.nombre === nombreBuscado.toLocaleUpperCase());
        if (contactoEncontrado) {
        let nuevaActividad = prompt('Escribi la actividad que queres agregar: ')
        contactoEncontrado.agregarActividad(nuevaActividad);
        } else {
        alert ('Nombre no encontrado.')
        contactoEncontrado = 1
        }
    } while (contactoEncontrado == 1)
    
    
}


function saludoFinal () {
    alert('Gracias por Tu gestión, esperamos volver a gestionar juntos pronto!')
}

crearNuevoContacto()
comoContinuar()

do {
    if (sinContactos == 1 || conContactos == 2) {
        crearNuevoContacto()
        comoContinuar()    
    } else if(sinContactos ==2 || conContactos == 3) {
      saludoFinal()
      break
    } else if(conContactos == 1) {
        crearActividad()
        comoContinuar()
    }
} while(sinContactos !==2 || conContactos !== 3)

imprimirLog (Contactos)
