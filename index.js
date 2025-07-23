let saludo = prompt("Bienvenido a Blackpool Libros, ¿cómo te llamás?");
console.log(saludo);

let genero = prompt(
  "Hola " + saludo + " ¿qué género de novela buscás?" +  " 1. Romance" + " 2. Comedia" + " 3. Ciencia ficción" + " 4. Policiales" + " 5. Terror" + " 6.Preventa");
console.log(genero);

if (genero == "1" || genero == "Romance") {
  alert("Te recomendamos 'Orgullo y prejuicio' de Jane Austen.");
} else if (genero == "2" || genero == "Comedia") {
  alert("Te recomendamos 'Maldito karma' de David Safier.");
} else if (genero == "3" || genero == "Ciencia ficción") {
    let carrito = ["'Duna' de Frank Herbert, '1984' de George Orwell, 'La guerra de los mundos' de H. G. Wells, 'El cuento de la criada' de Maragaret Atwood"]

    let compra = [];
    let comprando = true;

    while (comprando) {
        let seleccion = prompt ("Elige entre estos cuatro grandes titulos " + "1.'Duna' de Frank Herbert " + "2.'1984' de George Orwell " + "3.'La guerra de los mundos' de H. G. Wells " + "4.'El cuento de la criada' de Maragaret Atwood");

        if (seleccion == "1" || seleccion == "Duna") {
            compra.push ("Duna");
        }else if (seleccion == "2" || seleccion == "1984") {
            compra.push ("1984")
        }else if (seleccion == "3" || seleccion == "La guerra de los mundos") {
            compra.push ("La Guerra de los mundos")
        }else if (seleccion == "4" || seleccion == "El cuento de la criada") {
            compra.push ("El cuento de la criada")
        }else {
            alert ("Intente de nuevo con los titulos mostrados");
            continue;
        }

        comprando = confirm("quieres seguir viendo titulos?")
    }
    
    if (compra.length > 0) {
    alert("Tus libros seleccionados: , " + compra.join(","));
  } else {
    alert("No seleccionaste ningún libro.");
  }



  //alert("Te recomendamos 'Dune' de Frank Herbert.");
} else if (genero == "4" || genero == "Policiales" ) {
  alert("Te recomendamos 'Ragdoll' de Daniel Cole.");
} else if (genero == "5" || genero == "Terror") {
  let edad = prompt ("Debido a los temas de algunos titulos este genero se encuentra limitado, por favor ingresa tu edad para continuar, gracias.")
  if (edad <= 17 ){
    alert ("Te recomendamos visitar la seccion de terror juvenil o venir acompañado de un adulto" );
    }
  else if (edad >= 18) {
    alert ("Puedes adquirir cualquier titulo");
    }
} else if (genero == "6" || genero == "Preventa") {
  let reserva = prompt ("Con la compra de 'No tengas miedo' elegi otro libro del mismo autor de regalo, recomendados 1. 'El Talisman', 2. 'It', 3' Bellas durmientes, 4. 'Joyland' o elige el titulo que quieras") 
}else {
  alert("¡No reconocimos ese género! Pero tenemos muchas opciones en la librería.");
}


