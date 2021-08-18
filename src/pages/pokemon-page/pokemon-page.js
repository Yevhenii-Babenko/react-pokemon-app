import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons,  getPokemonById } from '../../redux/actions/actions';
import { allPokemons } from '../../redux/selectors/selectors';
import {Heart} from '../../components/images/'
/* import PokemonTeamplate from '../../components/pokemon-teamplate'; */

import './pokemon-page.css'
/* import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'; */
const pokeStyle = {
  card: {
    width: '320px',
    height: '300px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    /* justifyContent: 'space-around', */
  },
  imgContainer: {
    background: '#F2F2F2',
  },
  name: {
    fontSize: '16px',
    color: 'red'
  },
  image: {
    width: '75%',
    objectFit: 'contain'
  },
  heartHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px'
  }
}
function PokemonPage() {
  const getPokemons = useSelector(allPokemons);
  /* const selectedPokemon = useSelector(onePokemon); */
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllPokemons());
    dispatch(getPokemonById(1))
  }, [dispatch])
    return (
            <div className="container wrapper">
              {getPokemons.length !== 0 && getPokemons.map((pokemon, index) => {
                return(
                  <div style={pokeStyle.card} key={index}>
                    <div style={pokeStyle.imgContainer}>
                      <img style={pokeStyle.image} src={pokemon.sprites.other['official-artwork'].front_default} alt="Pokemon image" />
                    </div>
                    <div style={pokeStyle.heartHolder}>
                      <h3 style={pokeStyle.name}> {pokemon.name}</h3>
                      <img src={Heart} alt="heart_default" />
                    </div>
                  </div>
                )
              })}
            </div>
    )
}

export default PokemonPage;



/* const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
} */