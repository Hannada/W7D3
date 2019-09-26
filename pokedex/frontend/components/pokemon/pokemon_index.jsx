import React from 'react';


class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemons = this.props.pokemon; 
    const poke = pokemons.map(pokemon => {
      return <li key={pokemon.id}> {pokemon.name} : <img src={`${pokemon.image_url}`} /></li>
    });
  
    return (
      <div>
        <ul>
          {poke}
        </ul>
      </div>
    );
  }


}


export default PokemonIndex; 