
function recogerDatos(){
    let nombrePoke = document.getElementById("nombrePokemon").value;

    console.log(nombrePoke);

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
    var imprimirNombre = document.getElementById("nombreDePokemon");
    var imprimirImagen = document.getElementById("imagenPokemon");
    pokeNumero = Math.floor(Math.random() * (151 - 1)) + 1;

    var request = $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokeNumero}`,
        method: "GET"
    });
    request.done(function( data ) {
        pokeAux=data;
        imprimirNombre.innerHTML = `${pokeAux.name.toUpperCase()}`;
        imprimirImagen.src = `${pokeAux.sprites.other.dream_world.front_default}`;
        console.log(data);

    });
    request.fail(function( error ) {
        console.log( 'Error: ' , error );
    });
}

