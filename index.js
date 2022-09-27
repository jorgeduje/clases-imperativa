
let dark = true

let titulo = document.querySelector("h1")

dark  ? titulo.style.color = "lime" : titulo.style.color = "black"

let español = false 


español ? null : titulo.textContent = "Otra cosa"

titulo.innerHTML = "<h4>Otra cosa</h4>"


let estudiantes = [
    {
        nombre: "pepito",
        notaPromedio: 10
    },
    {
        nombre: "maria",
        notaPromedio: 9
    },
    {
        nombre: "fulanito",
        notaPromedio: 8
    },
]



document.querySelector(".btn").addEventListener( "click" , (e)=>{

    const traerDatos = ( arr )=>{

        for (let i = 0; i < arr.length; i++) {
            
            let nuevoElemento = document.createElement("div")
            nuevoElemento.textContent = `Mi nombre es ${arr[i].nombre} y mi nota promedio es ${arr[i].notaPromedio}`
            let algo = document.querySelector(".container")
            algo.appendChild(nuevoElemento)

        }

    }

    traerDatos(estudiantes)
    
})

let buttonDark = document.getElementById("btnDark")

console.log(buttonDark)

