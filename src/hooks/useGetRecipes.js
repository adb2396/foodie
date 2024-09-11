import { useCallback, useEffect, useState } from 'react'

export function useGetRecipes() {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const fetchRecipes = useCallback(async function (query = 'banana') {
		try {
			setIsLoading(true)
			const response = await fetch(
				`${process.env.REACT_APP_RECIPE_URL}?search=${query}&key=${process.env.REACT_APP_API_KEY}`
			)
			const json = await response.json()

			setData(json?.data?.recipes || [])
			setIsLoading(false)
		} catch (error) {
			setError(`Something went wrong! ${error}`)
			setIsLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchRecipes()
	}, [fetchRecipes])

	return { isLoading, data, error, fetchRecipes }
}
