import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { onePokemon } from '../../redux/selectors/selectors';
import { fetchPokeDataById } from '../../redux/actions/actions';
import Dashboard from '../../components/dashboard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';

function PokemonProfile() {
    let paramid = useParams();
    const dispatch = useDispatch();
    const singlePoke = useSelector(onePokemon);

    useEffect(() => {
        dispatch(fetchPokeDataById(paramid.id))
    }, [dispatch])

    return (
        <div>
        <Router>
            <Switch>
                <Route path="/pokemon-profile/:id" >
                    <PokemonProfile />
                </Route>
            </Switch>
        </Router>
            <Dashboard />
            {singlePoke.lenght !== 0 && singlePoke.map(pokeData => {
                return (
                    <div key={pokeData.id}>
                        <img src={pokeData.sprites.other.dream_world.front_default} alt="Pokemon img" />
                        <h2>{pokeData.name}</h2>
                        <p>Base Experience {pokeData.base_experience}</p>
                        <p> {pokeData.height}</p>
                        <p> {pokeData.weight}</p>
                        <p> {pokeData.types.map((poketype, index) => {
                                return (
                                    <span key={index}>{ poketype.type.name }</span>
                                )
                            }
                            )}</p>
                        <p> { pokeData.abilities.map((pokeAbility, index) => {
                                return (
                                    <span key={index}>{ pokeAbility.ability.name }</span>
                                )
                            }
                            )}
                        </p>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default PokemonProfile;
