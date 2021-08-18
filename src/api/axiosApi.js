import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2';

const apiConnect = axios.create({
    baseURL: baseUrl,
});

export const pokemosApi = {
    getAllPokemons: () => apiConnect.get('/pokemon?limit=15&offset=15'),
    getSinglePokemon: (id) => apiConnect.get(`/pokemon/${id}`),
}