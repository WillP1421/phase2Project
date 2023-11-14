import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar () {
    return (
        <nav>
            <NavLink
            to="/"
            className="nav-link"
            >
                Home
            </NavLink>
            <NavLink 
            to="/Games"
            className="nav-link"
            >
                Games
            </NavLink>
            <NavLink 
            to="/NewGame"
            className="nav-link"
            >
           New Games
            </NavLink>
        </nav>
    )
}



export default NavBar;