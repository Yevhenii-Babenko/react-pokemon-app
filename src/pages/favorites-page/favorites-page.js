import { useSelector } from 'react-redux';
import { favorPokemon } from '../../redux/selectors/selectors';
import PokemonCard from '../../components/pokemon-card';
import { Link } from "react-router-dom";
import './favorites-page.css'

function FavoritesPage() {
    const favorArrayToDisplay = useSelector(favorPokemon);
    return (
        <div className="favorpage-container">
            { favorArrayToDisplay.length > 0 ? 
                favorArrayToDisplay.map((pokemon, index) => {
                    return(
                        <Link 
                            style={{
                                textDecoration: 'none',
                                color: '#201D2A',
                                fontWeight: 500,
                            }}
                            to={{
                                pathname: "/pokemon",
                                state: {
                                    pokemon: pokemon,
                                },
                            }} 
                            key={index}
                        >
                            <PokemonCard
                                className="poke-card"
                                name={pokemon.name}
                                image={pokemon.sprites.other["official-artwork"].front_default}
                                pokemonInfoObj={favorArrayToDisplay}
                            />
                        </Link>
                    )
                }) : 
                <div> No items added to favorite </div>
                }
        </div>
    )
}

export default FavoritesPage;
