// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigos() {
   nombreAmigo = document.getElementById('amigo').value;
   console.log(nombreAmigo);
      if (nombreAmigo == ''){
        alert('Por favor, inserte un nombre');
    } else {
        listaNombres.push(nombreAmigo);
        mostraAmigos();
        limpiar();
    }
        console.log(listaNombres);
}

function limpiar(){
    document.getElementById('amigo').value = '';
    document.getElementById('resultado').innerHTML = "";
}

function mostraAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for(let i=0; i < listaNombres.length; i++){
        let li = document.createElement('li');
        li.textContent = listaNombres[i];
        lista.appendChild(li);
    }
 }

function sortearAmigos(){
    if (listaNombres.length == 0){
        alert('Escriba los nombres para sortear');
    } else{
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = ""; 
    
       let numeroGenerado =  Math.floor(Math.random()*listaNombres.length);
       console.log(numeroGenerado);
       
       amigoSorteado.innerHTML = 'El amigo secreto es:' + listaNombres[numeroGenerado];
       listaNombres = [];
       mostraAmigos();

    }
       
}