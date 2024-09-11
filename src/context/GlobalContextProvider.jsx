import React, { useState } from 'react'
import GlobalContext from './context'
import { useGetRecipes } from '../hooks/useGetRecipes'

export default function GlobalContextProvider({ children }) {
	// state
	const [query, setQuery] = useState('')
	const [favourites, setFavourites] = useState({})

	// hooks
	const { data, isLoading, error, fetchRecipes } = useGetRecipes()

	// handlers
	const handleQueryChange = (value) => setQuery(value)

	const handleFindRecipes = async (e) => {
		e.preventDefault()
		setQuery('')
		await fetchRecipes(query)
	}

	const handlerFavouritesSave = (recipe) => {
		setFavourites((prevState) => {
			const newFavourites = { ...prevState }

			if (!newFavourites[recipe.id]) {
				newFavourites[recipe.id] = recipe
			} else {
				delete newFavourites[recipe.id]
			}

			return newFavourites
		})
	}

	return (
		<GlobalContext.Provider
			value={{
				query,
				isLoading,
				error,
				favourites,
				recipes: data,
				onQueryChange: handleQueryChange,
				onQuerySubmit: handleFindRecipes,
				onFavouritesSave: handlerFavouritesSave,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
