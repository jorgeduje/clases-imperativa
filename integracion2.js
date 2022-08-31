

//ANCHOR ULTIMO REPASO, VAMOSSSS 💪💪💪


// TODO :
     // Ejercicio 1):
        // Crear una funcion que reciba un numero por parametro
        // la funcion tendra que verificar que ese numero sea multiplo de 5 
        // y ademas que sea un numero par, si eso se cumple retornar verdadero
        // de lo contrario retornar falso

        const serPar = num =>{

            if( num % 5 === 0 && num % 2 === 0 ){
                return true
            }else{
                return false
            }

            // return  ( num % 5 === 0 && num % 2 === 0 ) ? true : false

            // return ( num % 5 === 0 && num % 2 === 0 )
        }

        let resultadoEsParYmultiplo = serPar(15)
        console.log( resultadoEsParYmultiplo )


// Ejercicio 2):
        // Crear una funcion que reciba un string por parametros,
        // luego trabajaeremos con ese string para que la funcion nos diga si la palabra
        // es corta, mediana o larga
        // las palabras cortas son aquellas que tienen menos de 4 letras
        // las palabras medianas son aquellas que tienen 4 o mas letras pero menos que 8
        // y las palabras largas son aquellas que tienen 8 o mas letras

        const verificarPalabra = palabra => {

            if( palabra.length < 4 ){
                return "La palabra es corta"
            }else if( palabra.length < 8 ){
                return "La palabra es mediana"
            }else{
                return "La palabra es larga"
            }

        }

        let tipoPalabra = verificarPalabra( "murcielago" )

        




 // Ejercicio 3):
        // Vamos a simular un E-commerce
        // Para eso, necesitamos crear un arreglo que contendra los productos
        // Cada producto tendra ( nombre, descripcion, precio, cantidad,)
        // Ahora, como dueño de la empresa, queremos saber cuanto dinero nos 
        // ingresaria si se venden todos los productos que tenemos en stock
        // Ademas de eso, nos dimos cuenta que nuestros productos no tienen ID
        // para ello deberemos tambien recorrer el arreglo y agregarle a cada producto 
        // un ID que empieze en 1 y que vaya incrementando
        // Por ultimo nos piden que si hay algun producto que sea "notebook", 
        // debemos aumenta el precio en un 30%

    let productos = [

        {
            nombre: "celular",
            descripcion: "es un celular",
            precio: 200,
            cantidad: 10
        },
        {
            nombre: "notebook",
            descripcion: "es una notebook",
            precio: 300,
            cantidad: 5
        },
        {
            nombre: "zapatilla",
            descripcion: "es una zapatilla",
            precio: 50,
            cantidad: 10
        },
        {
            nombre: "notebook",
            descripcion: "es una zapatilla",
            precio: 100,
            cantidad: 10
        },

    ] 


    const calcularTotal = array =>{

        let acc = 0
        
        for( let i = 0; i < array.length; i++ ){
            
            // acc += array[i].precio * array[i].cantidad
            acc = acc + array[i].precio * array[i].cantidad

        }

        return acc

    }

    let resultadoVenta = calcularTotal(productos)
    console.log( resultadoVenta )

    

    // PRODUCTOS

    const agregarId = arr => {

        for(let i = 0; i < arr.length; i++){

            arr[i].id = i + 1

        }

    }

    agregarId(productos)

    console.log( productos )
   


    const aumentarPrecio = arr =>{

        for (let i = 0; i < arr.length; i++) {

            if( arr[i].nombre === "notebook" ){

                arr[i].precio = arr[i].precio * 1.3
                // arr[i].precio *=  1.3
            }
            
        }

    }

    console.log("==================")
    console.log("==================")
    console.log("==================")
    aumentarPrecio(productos)

    console.log(productos)


    let alumnos = [
        {
            nombre: "pepito",
            aprobo: true
        },
        {
            nombre: "maria",
            aprobo: true
        },
        {
            nombre: "juancito",
            aprobo: false
        },
        {
            nombre: "manuelita",
            aprobo: false
        },
        {
            nombre: "carmen",
            aprobo: true
        }
    ]

    // FILTRAR LOS ALUMNOS QUE APROBARON

    // console.log( alumnos.filter( x => x.aprobo ))


    const filtrarAlumnos = arr =>{

        let alumnosOkey = []

        for(let i = 0; i < arr.length; i++){

            if( arr[i].aprobo === true ){

                alumnosOkey.push( arr[i] )

            }

        }

        return alumnosOkey

    }

    let alumnosAprobados = filtrarAlumnos( alumnos )

    console.log(alumnosAprobados)