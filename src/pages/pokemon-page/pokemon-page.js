import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons,  getPokemonById } from '../../redux/actions/actions';
import { allPokemons, onePokemon } from '../../redux/selectors/selectors';
/* import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'; */

function PokemonPage() {
  const getPokemons = useSelector(allPokemons);
  const selectedPokemon = useSelector(onePokemon);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllPokemons());
    dispatch(getPokemonById(1))
  }, [dispatch])
    return (
        <div>
            <h1>Pokemon page</h1>
            {console.log('pokemons', getPokemons)}
            {console.log('selectedPokemon', selectedPokemon)}
            <div>
              {getPokemons.length ? getPokemons.map((pokemon, index) => {
                return(
                  <>
                    <div key={index}> {pokemon.name} </div>
                    <a href={pokemon.url}> Pokemon account </a>
                  </>
                )
                }): null}
                {selectedPokemon.length ? selectedPokemon.map((png) => {
                  return (
                    <img src={png} alt="front_default" />
                    )
                  }) : null }
            </div>
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