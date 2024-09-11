import { createBrowserRouter, Navigate } from 'react-router-dom'
import Favourites from '../pages/Favourites/Favourites'
import Recipe from '../pages/Recipe/Recipe'
import Home from '../pages/Home/Home'
import { ROUTES } from './routes'
import Layout from '../layout/Layout'

export const router = createBrowserRouter([
	{
		path: ROUTES.ROOT,
		element: <Layout />,
		errorElement: <div>Error Occured!</div>,
		children: [
			{
				element: <Navigate to={ROUTES.HOME} />,
				index: true,
			},
			{
				path: ROUTES.HOME,
				element: <Home />,
			},
			{
				path: ROUTES.FAVOURITES,
				element: <Favourites />,
			},
			{
				path: '/recipe/:id',
				element: <Recipe />,
			},
		],
	},
])
