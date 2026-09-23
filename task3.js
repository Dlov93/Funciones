// ¡Escribe tu código debajo de esta línea!

function Mail(asunto, mensaje) {
  this.asunto = asunto
  this.mensaje = mensaje
  this.imprimirCorreo = function(){
    return `${this.asunto}: ${this.mensaje}`
  }

}
let asunto= process.argv[3]
let mensaje= process.argv[4]
const nuevoCorreo = new Mail(asunto,mensaje)

// ¡Escribe tu código encima de esta línea!

console.log(nuevoCorreo.imprimirCorreo())
