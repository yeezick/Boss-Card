import {Link} from "react-router-dom"

function Loading () {

  return (
    <div className="loading">
      <h2>Loading....</h2>
      <Link to="/">
        <p>Head back home</p>
      </Link>
    </div>
  )
}

export default Loading