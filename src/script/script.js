window.onload = pokemonSalvaje();
function recogerDatos(){
    //tomar el valor ingresado en el input para despues entregarlo a la API
    let nombrePoke = document.getElementById("nombrePokemon").value;

    //consulta a la API con el nombre del pokemon ingresado anteriormente
    var request = $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${nombrePoke}`,
        method: "GET"
    });
    request.done(function( data ) {
        const POKEMON = {
            nombre: data.name,
            id: data.id,
            tipo: traducirTipo(data.types[0].type.name),
            imagen: data.sprites.other.dream_world.front_default
        }
        imprimirPokemon(POKEMON);
        console.log(data);
    });
      
    request.fail(function( error ) {
        console.log( 'Error: ' , error );
    });

}

function pokemonSalvaje(){
    //numero random entre 1 - 150 para mostrar pokemon aleatorio
    pokeNumero = Math.floor(Math.random() * (151 - 1)) + 1;

    var request = $.ajax({
        //entregar el numero aleatorio para consultar en la API
        url: `https://pokeapi.co/api/v2/pokemon/${pokeNumero}`,
        method: "GET"
    });
    request.done(function( data ) {
        //guardar la informacion en un objeto con los datos que utilizaremos
        const POKEMON = {
            nombre: data.name,
            id: data.id,
            tipo: traducirTipo(data.types[0].type.name),
            imagen: data.sprites.other.dream_world.front_default
        }
        imprimirPokemon(POKEMON);
        console.log(data);

    });
    request.fail(function( error ) {
        console.log( 'Error: ' , error ); 
    });
}

//traducir tipo de pokemon
function traducirTipo(tipoPokemon){
    var tipo
    switch(tipoPokemon){
        case 'fire':
            tipo = 'Fuego';
            return tipo;
            break;
        case 'water':
            tipo = 'Agua';
            return tipo;
            break;
        case 'plant':
            tipo = 'Planta';
            return tipo;
            break;
        case 'normal':
            tipo = 'Normal';
            return tipo;
            break;
        case 'flying':
            tipo = 'Volador';
            return tipo;
            break;
        case 'bug':
            tipo = 'Bicho'
            return tipo;
            break;
        case 'fighting':
            tipo = 'Luchador';
            return tipo;
            break;
        case 'electric':
            tipo = 'Eléctrico'
            return tipo;
            break;
        case 'poison':
            tipo = 'Veneno'
            return tipo;
            break;
        case 'psychic':
            tipo = 'Psíquico'
            return tipo;
            break;
        case 'rock':
            tipo = 'Roca';
            return tipo;
            break;
        case 'ghost':
            tipo = 'Fantasma';
            return tipo;
            break;
        case 'ground':
            tipo = 'Tierra';
            return tipo;
            break;
        case 'fairy':
            tipo = 'Hada';
            return tipo;
            break;
        case 'dragon':
            tipo = 'Dragón';
            return tipo;
            break;
        case 'ice':
            tipo = 'Hielo';
            return tipo;
            break;
        default:
            tipo = "Desconocido";
            return tipo;
            break;
    }
}

//imprimir entregando el objeto pokemon
function imprimirPokemon(pokemon){
    var imprimirNombre = document.getElementById("nombreDePokemon");
    var imprimirImagen = document.getElementById("imagenPokemon");
    var imprimirNumero = document.getElementById("numeroPokedex");
    var imprimirTipo = document.getElementById("tipo");
    imprimirNombre.innerHTML = `${pokemon.nombre.toUpperCase()}`;
    imprimirImagen.src = `${pokemon.imagen}`;
    imprimirNumero.innerHTML = `${pokemon.id}`;
    imprimirTipo.innerHTML = `${pokemon.tipo}`;
}

