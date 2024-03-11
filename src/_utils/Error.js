import React from 'react'
import "@/_utils/Error.css"
import { Link } from 'react-router-dom'
function Error() {
  return (
<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - The Page can't be found</h2>
			</div>
			<Link to="home">Go TO Homepage</Link>
		</div>
	</div>  )
}

export default Error