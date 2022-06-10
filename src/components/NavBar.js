
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <div>
            <Link className="nav-link" to="/"><button color="inherit">Home</button></Link>
            <Link className="nav-link" to="/portfolio"><button color="inherit">Portfolio</button></Link>
            <Link className="nav-link" to="/contacts"><button color="inherit">Contacts</button></Link>
        </div>
    )
}

export default Navbar