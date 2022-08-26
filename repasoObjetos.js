




// REPASO OBJETOS Y ARREGLOS



let numeros = [12, 15, 51, 15, 65, 14, 17] // 6

// ACCEDO AL PRIMER ELEMENTO
console.log( numeros[0] )

// ACCEDO AL ULTIMO ELEMENTO
console.log( numeros[ numeros.length - 1 ] )

console.log(numeros.lastIndexOf(13))

//
console.log(".----------------.")
console.log(".----------------.")
console.log(".----------------.")

let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

/*
Nos solicitan también crear un objeto literal llamado “banco”, 
el cual tendrá una propiedad llamada “clientes” que 
estará compuesta de la lista de objetos obtenidos en el punto anterior.
*/

/*
Al objeto “banco”, crearle un método llamado consultarCliente, el cual 
recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y 
retornar el objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
*/


/*

Crear otro método llamado depósito que recibirá dos parámetros: 
el titular de cuenta y una cantidad de dinero a depositar. 
El método debe obtener la cuenta correspondiente y luego sumar la cantidad 
de dinero a depositar a saldo en pesos. Luego, deberá dar un aviso por la consola
 con el mensaje “Depósito realizado, su nuevo saldo es: XXXX”.

*/

let banco = {

  clientes: arrayCuentas,
  consultarClientes: function( nombre ){
    for(let i = 0; i < this.clientes.length; i++ ){
      if(this.clientes[i].titularCuenta === nombre){
        return this.clientes[i]
      }
    }
    return "Lo siento, no se encontro el cliente"
  },
  deposito: function( nombre, cantidad ){

    let cuentaDepositar = this.consultarClientes(nombre)
    
    // cuentaDepositar.saldoEnPesos = cuentaDepositar.saldoEnPesos + cantidad
    cuentaDepositar.saldoEnPesos += cantidad
    console.log("Ya se realizo el deposito, su nuevo saldo es " + cuentaDepositar.saldoEnPesos )

  }

}


banco.deposito("Jarret Lafuente", 10000)





