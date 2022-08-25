
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
  
    Crear otro método llamado depósito que recibirá dos parámetros, el titular de
    cuenta y una cantidad de dinero a depositar. El método debe obtener a la
    cuenta correspondiente y luego sumar la cantidad de dinero a depositar a saldo
    en pesos. Luego deberá dar un aviso por la consola con el mensaje “Depósito
    realizado, su nuevo saldo es: xxx”.

  */

let banco = {
    clientes : arrayCuentas,
    consultarCliente : function(nombre){
        for(let i= 0; i < this.clientes.length; i++){

            if(nombre === this.clientes[i].titularCuenta){
                return this.clientes[i]
            } 

        }
        return 'no se encontro'
    },
    extraccion: function( nombre, cantidad ){

        let encontrado = this.consultarCliente(nombre)

        encontrado.saldoEnPesos -= cantidad
        console.log(`Extraccion realizada, su nuevo saldo es ${encontrado.saldoEnPesos}`)

    }
  
}

banco.extraccion("Jacki Shurmer", 10000)

