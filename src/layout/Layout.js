import React, { useContext } from 'react'
import { Link, Outlet, useMatch } from 'react-router-dom'
import { ROUTES } from '../router/routes'
import GlobalContext from '../context/context'

import './layout.style.css'

export default function Layout() {
	const isMatched = useMatch(ROUTES.HOME)

	// context
	const { query, onQueryChange, onQuerySubmit } = useContext(GlobalContext)

	return (
		<>
			<nav className="navbar">
				<div className="brand">
					<Link to={ROUTES.ROOT} className="brand-icon">
						TFlavorJournal
					</Link>
				</div>
				{isMatched && (
					<form onSubmit={onQuerySubmit}>
						<input
							type="text"
							className="search-input"
							value={query}
							onChange={(e) => onQueryChange(e.target.value)}
							placeholder="Search for the recipe ...."
						/>
					</form>
				)}
				<div className="nav-links">
					<Link to={ROUTES.ROOT}>Home</Link>
					<Link to={ROUTES.FAVOURITES}>Favourites</Link>
				</div>
			</nav>
			<Outlet />
		</>
	)
}
