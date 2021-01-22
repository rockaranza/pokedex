
function recogerDatos(){
    let nombrePoke = document.getElementById("nombrePokemon").value;

    console.log(nombrePoke);

    var request = $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${nombrePoke}`,
        method: "GET"
    });
    request.done(function( data ) {
        console.log(data);
    });
      
    request.fail(function( error ) {
        console.log( 'Error: ' , error );
    });

}

