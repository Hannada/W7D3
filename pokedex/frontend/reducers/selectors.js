export const selectAllPokemon = ( {entities: {pokemon}} ) =>
{ 
  // return Object.values(state.entities.pokemon);
  return Object.values(pokemon);  
};

// example of key value pairs
// const obj = {
//   hello: {
//     1: "one"
//   }
// }

// Object.values(obj) => [{
//     1: "one"
//   }]

  