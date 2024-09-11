import React from 'react'

import './recipe.style.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../router/routes'

export default function RecipeCard({ recipeDetails }) {
	const { publisher, title, image_url, id } = recipeDetails

	return (
		<div className="recipe-card">
			<img src={image_url} alt={title} className="image" />
			<div className="publisher">{publisher}</div>
			<div className="title">{title}</div>
			<Link to={`${ROUTES.RECIPE}/${id}`} className="recipe-details">
				RECIPE DETAILS
			</Link>
		</div>
	)
}
