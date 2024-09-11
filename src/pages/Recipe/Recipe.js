import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useGetRecipeDetails } from '../../hooks/useGetRecipeDetails'
import Loading from '../../components/Loading/Loading'

import './recipe.style.css'
import GlobalContext from '../../context/context'

export default function Recipe() {
	// constants
	const params = useParams()

	// state
	const { onFavouritesSave, favourites } = useContext(GlobalContext)

	// hooks
	const { data, isLoading, error } = useGetRecipeDetails(params.id)

	// handlers
	const handleFavouritesClick = () => {
		onFavouritesSave(data)
	}

	console.log('***', favourites)

	if (isLoading) return <Loading />

	if (error) return <div>{error}</div>

	return (
		<div className="recipe-page">
			<div>
				<img className="recipe-image" src={data?.image_url} alt={data?.title} />
			</div>
			<div className="content">
				<div className="publisher">{data?.publisher}</div>
				<div className="title">{data?.title}</div>
				<button
					type="button"
					className={`save-as-btn ${favourites[params.id] ? 'remove' : ''}`}
					onClick={handleFavouritesClick}
				>
					{!favourites[params.id]
						? 'SAVE AS FAVOURITES'
						: 'REMOVE FROM FAVOURITES'}
				</button>
				<div className="ingredients">
					<p>Ingredients</p>
					<ol>
						{data?.ingredients && data?.ingredients.length > 0 ? (
							data.ingredients.map((item) => (
								<li key={item.description}>
									<div className="list-item">
										<div>{item.description}</div>
										<div className="quantity">
											{`( ${item.quantity} ${item.unit} )`}
										</div>
									</div>
								</li>
							))
						) : (
							<div>No Ingredients Present!</div>
						)}
					</ol>
				</div>
			</div>
		</div>
	)
}
