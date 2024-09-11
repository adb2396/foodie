import { useCallback, useEffect, useState } from 'react'

export function useGetRecipeDetails(id) {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [data, setData] = useState(null)

	const fetchRecipeDetails = useCallback(
		async function () {
			setIsLoading(true)
			try {
				const response = await fetch(
					`${process.env.REACT_APP_RECIPE_URL}/${id}?key=${process.env.REACT_APP_API_KEY}`
				)
				const json = await response.json()

				setData(json?.data?.recipe)
				setIsLoading(false)
			} catch (error) {
				setError(`Something went wrong! ${error}`)
				setIsLoading(false)
			}
		},
		[id]
	)

	useEffect(() => {
		fetchRecipeDetails(id)
	}, [fetchRecipeDetails, id])

	return { data, isLoading, error, fetchRecipeDetails }
}
