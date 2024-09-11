import React, { useContext } from 'react'
import GlobalContext from '../../context/context'
import RecipeCard from '../../components/RecipeCard/RecipeCard'

import './home.styles.css'
import Loading from '../../components/Loading/Loading'

export default function Home() {
	// context
	const { recipes, isLoading, error } = useContext(GlobalContext)

	// render functions
	const renderRecipes = () => {
		if (isLoading) return <Loading />

		if (error) return <h5>{error}</h5>

		if (recipes.length === 0) return <h5>No recipe present</h5>

		return recipes.map((item) => (
			<RecipeCard key={item.id} recipeDetails={item} />
		))
	}

	return <div className="home-page">{renderRecipes()}</div>
}
