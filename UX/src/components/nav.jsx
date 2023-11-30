import { Link } from "react-router-dom"
import "./nav.css"

export function Nav() {
    return(
        <div className="navbar--container">
            <Link className="navbar--links" to={"../"} relative="path" >
                Home
            </Link>
            <Link className="navbar--links" to={"../recipe"} relative="path" >
                Recipe
            </Link>
            <Link className="navbar--links" to={"../about"} relative="path" >
                About me
            </Link>
            <h1></h1>
        </div>
    )
}