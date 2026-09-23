// ¡Escribe tu código debajo de esta línea!
function FriendsList(list) {
  this.lista = list
  this.ver =function(){
    return console.log(this.lista)
  }
}
let can=process.argv[2]
let i=3;
let l =[]
while(i <=can){
    i++;
    l.push(process.argv[i])
   
}

let amigos = new FriendsList(l)
amigos.ver()

// ¡Escribe tu código encima de esta línea!