import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from "./pokemon_index";

const mapStateToProps = state => (
  {
    pokemon: selectAllPokemon(state)
  }
);


const mapDispatchToProps = dispatch => ({
  //requestAllPokemon pointing to function invoking dispatch passing in
  //action from action creator which will be an ajax request intercepted by our
  // thunk then our APIutil will fire off that ajax request
  requestAllPokemon: () => dispatch(requestAllPokemon())
})


export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex); 