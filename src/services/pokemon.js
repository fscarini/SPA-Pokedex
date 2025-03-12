export async function getPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/')
    return await response.json()
}
