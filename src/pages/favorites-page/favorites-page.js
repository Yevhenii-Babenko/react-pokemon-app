import { useSelector } from 'react-redux';
import { favorPokemon } from '../../redux/selectors/selectors'

function FavoritesPage() {
    const favorArrayToDisplay = useSelector(favorPokemon);
    console.log('favorArrayToDisplay', favorArrayToDisplay);
    return (
        <div>
            <h1>Favorites page</h1>
            { favorArrayToDisplay.lenght ? 
                favorArrayToDisplay.map((pokemon, index) => {
                    return(
                        <></>
                    )
                }) : 
                <div> No items added to favorite </div>
                }
        </div>
    )
}

export default FavoritesPage;
