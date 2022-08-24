
// 😄 OBJETOS LITERALES 😄

// TODO :
    // FORMA
    // METODOS
    // THIS
    // MANIPULACION 


    let numeros = [2, 12, 14] // array
        numeros.push( 122 )
        numeros[4] = 145

    //objeto = propiedades y metodos ( caracteristicas y acciones )
    // POR PARES DE CLAVE Y VALOR
    // METODOS SOLO SE PUEDEN ESCRIBIR CON FUNCION EXPRESADA COMUN

    // PROPIEDAD = CLAVE : VALOR

    let perro = {
        nombre: "pepito",
        apellido: "perez",
        raza : "callejero",
        edad : 2,
        ladrar : function( ladrido ){
            return ladrido
        },
        decirNombreCompleto : function(){
            return `hola mi nombre es ${this.nombre} ${this.apellido}`
        }

    }


    console.log( perro.ladrar("guauuu") ) 
    console.log( perro.ladrar("guauuu guuuuuuu") ) 

    console.log(perro.color)

    //MANIPULACION DE OBJETOS
    perro.color = "marron"

    console.log(perro.color)

    perro.edad = 3

    delete perro.raza

    console.log(perro)



console.log("-----------------")

    let estudiantes = [
        {
            nombre: "maria",
            notas: [9, 8, 10]
        },
        {
            nombre: "pepito",
            notas: [7, 5, 10]
        },
        {
            nombre: "fulanito",
            notas: [2, 1, 3]
        }
    ]


    const recorrer = ( arr )=>{

        for(let i = 0; i < arr.length; i++ ){

            arr[i].id = i + 1
            arr[i].notas.push(10)

        }

    }

    recorrer(estudiantes)












    console.log(estudiantes )

