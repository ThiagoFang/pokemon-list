import axios from 'axios'

const BASE = 'https://pokeapi.co/api/v2/'

const pokeApi = {
    getPokemonData: async (endpoint) => {
        const response = await axios.get(`${BASE}${endpoint}`)
        return response.data
    },

    getData: async (endpoint) => {
        const response = await axios.get(endpoint)
        return response.data
    },
}

export default pokeApi