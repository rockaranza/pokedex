
function recogerDatos(){
    //tomar el valor ingresado en el input para despues entregarlo a la API
    let nombrePoke = document.getElementById("nombrePokemon").value;

    //consulta a la API con el nombre del pokemon ingresado anteriormente
    var request = $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${nombrePoke}`,
        method: "GET"
    });
    request.done(function( data ) {
        pokeAux=data;
        console.log(data);
    });
      
    request.fail(function( error ) {
        console.log( 'Error: ' , error );
    });

}

function pokemonSalvaje(){
    // pasar la etiqueta html a una variable para luego cambiar sus atributos
    var imprimirNombre = document.getElementById("nombreDePokemon");
    var imprimirImagen = document.getElementById("imagenPokemon");
    //numero random entre 1 - 150 para mostrar pokemon aleatorio
    pokeNumero = Math.floor(Math.random() * (151 - 1)) + 1;

    var request = $.ajax({
        //entregar el numero aleatorio para consultar en la API
        url: `https://pokeapi.co/api/v2/pokemon/${pokeNumero}`,
        method: "GET"
    });
    request.done(function( data ) {
        //guardar la informacion en una variable para consultar lo que necesitemos  
        pokeAux=data;
        //cambiamos los atributos con la informacion que aporta el pokeAux (infi guardada anteriormente)
        imprimirNombre.innerHTML = `${pokeAux.name.toUpperCase()}`;
        imprimirImagen.src = `${pokeAux.sprites.other.dream_world.front_default}`;
        console.log(data);

    });
    request.fail(function( error ) {
        console.log( 'Error: ' , error );
    });
}

