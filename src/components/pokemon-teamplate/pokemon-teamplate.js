import './pokemon-teamplate.css'

function PokemonTeamplate(props) {

    return (
        <div className="pokemon-teamplate__item">
            <h1>{props.name}</h1> 
        </div>
    )
}

export default PokemonTeamplate
