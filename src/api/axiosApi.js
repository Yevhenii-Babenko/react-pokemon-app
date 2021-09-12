import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2';

const apiConnect = axios.create({
    baseURL: baseUrl,
});

export const pokemosApi = {
    getAllPokemons: () => apiConnect.get('/pokemon?limit=8')
}