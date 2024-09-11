import React, { useContext } from 'react'
import GlobalContext from '../../context/context'
import RecipeCard from '../../components/RecipeCard/RecipeCard'

import './favourites.style.css'

export default function Favourites() {
	// context
	const { favourites } = useContext(GlobalContext)

	const renderFavouriteRecipies = () => {
		const list = Object.keys(favourites)

		if (list.length === 0) return <h5>No favourite recipe present</h5>

		return list.map((item) => (
			<RecipeCard key={item} recipeDetails={favourites[item]} />
		))
	}

	return <div className="favourites-page">{renderFavouriteRecipies()}</div>
}
