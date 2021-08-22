import { Heart, HeartFilled } from "../../components/images";

function PokemonCard({ name, image, pokemonInfoObj }) {
   // console.log('name', name.slice(0,1).toUpperCase() + name.slice(1) )
    const pokeStyle = {
        card: {
          width: "320px",
          height: "300px",
          boxSizing: "border-box",
          borderRadius: "8px",
        },
        imgContainer: {
          background: "#F2F2F2",
        },
        name: {
          fontSize: "16px",
          color: "red",
        },
        image: {
          width: "75%",
          objectFit: "contain",
        },
        heartHolder: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
        },
      };
    return (
        <div
            className="wrapper__item"
            style={pokeStyle.card}
        >
            <div style={pokeStyle.imgContainer}>
                <img
                    style={pokeStyle.image}
                    src={
                        image
                    }
                    alt="Pokemon"
                />
            </div>
                <div 
                    style={pokeStyle.heartHolder}>
                    <h3 
                        style={pokeStyle.heartHolder}
                    > 
                        {name.slice(0,1).toUpperCase() + name.slice(1)}
                    </h3>
                  <img
                    src={
                      pokemonInfoObj.length &&
                      pokemonInfoObj.some((item) => item.name === name)
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
