
import { Link } from "react-router-dom"
function Navbar() {
    return (

        <div className="navigation">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                        <div className="logo">
                            <Link to="index.html"><img src="images/logo.svg"/></Link>
                        </div>
                    </div>

                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                        <div className="primary-nav">
                            <ul>
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Navbar