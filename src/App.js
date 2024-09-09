import { Link } from 'react-router-dom'
import './App.css'

function App() {
	return (
		<div className="App">
			<nav>
				<div>TFlavorJournal</div>
				<div>
					<input placeholder="Search for the recipe ...." />
				</div>
				<div>
					<Link to="/">Home</Link>
					<Link to="/favourites">Favourites</Link>
				</div>
			</nav>
		</div>
	)
}

export default App
