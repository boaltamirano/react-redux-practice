import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            console.log(action);
        }
    },
})

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions

// https://pokeapi.co/api/v2/pokemon?limit=10&offset=0