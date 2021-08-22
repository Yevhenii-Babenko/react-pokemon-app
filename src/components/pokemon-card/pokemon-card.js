
function PokemonCard() {
    return (
        <div
            className="wrapper__item"
            style={pokeStyle.card}
        >
            <div style={pokeStyle.imgContainer}>
                <img
                    style={pokeStyle.image}
                    src={
                    pokemon.sprites.other["official-artwork"].front_default
                    }
                    alt="Pokemon"
                />
            </div>
                <div 
                    style={pokeStyle.heartHolder}>
                    <h3 
                        style={pokeStyle.heartHolder}
                    > 
                        {pokemon.name}
                    </h3>
                  <img
                    src={
                      favoritePokemon.length &&
                      favoritePokemon.some((item) => item.name === pokemon.name)
                        ? HeartFilled
                        : Heart
                    }
                    alt="heart_default"
                  />
                </div>
              </div>
    )
}

export default PokemonCard;
