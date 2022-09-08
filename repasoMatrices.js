
let gastos = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
  ];

  console.table(gastos)

// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA


const calcularTotalSemanaX = ( mat, numSemana )=>{

    let acc = 0

    let posicionSemana = numSemana - 1

    for (let i = 0; i < mat[posicionSemana].length; i++) {

        acc += mat[posicionSemana][i]
        
    }

    return acc

}

let totalPrimerSemana = calcularTotalSemanaX(gastos, 1)
let totalSegundaSemana = calcularTotalSemanaX(gastos, 2)
console.log(totalPrimerSemana)
console.log(totalSegundaSemana)


let gastos2 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
  ];

// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
// PARA PODER SABER SI ESTUVO DE JODA O ESTUDIANDO
// ¿COMO LO HARIAS?


const recorrerDiaX = ( mat, numDia )=>{

    let acc = 0

    let posicionDia = numDia - 1

    for (let i = 0; i < mat.length; i++) {

        if( mat[i][posicionDia] !== undefined ){

            acc += mat[i][posicionDia]

        }
        
    }

    return acc 

}

let totalSabados = recorrerDiaX( gastos2, 6)
console.log(totalSabados)

// 11170


// DESDE EL BANCO NOS DIJERON QUE TENIAMOS UNA NOTA DE CREDITO
// CON 1000 PESOS DEL DIA 2 DE LA SEMANA 3

const cambiarMonto = ( mat, numSemana, numDia, monto, tipo )=>{

    // let posicionSemana = numSemana - 1
    // let posicionDia = numDia - 1

    for (let i = 0; i < mat.length; i++) {

        for (let j = 0; j < mat[i].length; j++) {
            
            if( i === posicionSemana && j === posicionDia && tipo==="resta"){
                mat[i][j] -= monto // MENOS IGUAL
            }

            if( i === posicionSemana && j === posicionDia && tipo==="suma"){
                mat[i][j] += monto // MENOS IGUAL
            }

        }
        
    }


}

cambiarMonto( gastos2, viernes, 6, 1000, "resta")

console.table(gastos2)

// CALCULAR EL TOTAL GASTADO DEL MES
