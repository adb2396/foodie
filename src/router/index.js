import { createBrowserRouter, Outlet } from 'react-router-dom'
import App from '../App'
import Favourites from '../pages/Favourites/Favourites'
import Recipe from '../pages/Recipe/Recipe'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<App />
				<Outlet />
			</>
		),
		errorElement: <div>Error Occured!</div>,
		children: [],
	},
	{
		path: '/favourites',
		element: <Favourites />,
	},
	{
		path: '/recipe/:id',
		element: <Recipe />,
	},
])
