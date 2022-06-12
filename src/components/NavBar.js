
import { a } from "react-router-dom"
import Logo from "../images/logo.svg"
function Navbar() {
    return (

        <div className="navigation">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                        <div className="logo">
                            <a href="index.html"><img src={Logo} alt='logo' /></a>
                        </div>
                    </div>

                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                        <div className="primary-nav">
                            <ul>
                                <li>   <a className="nav-link" href="/">Home</a>	</li>
                                <li>    <a className="nav-link" href="/portfolio">Portfolio</a>	</li>
                                <li>     <a className="nav-link" href="/contacts">Contacts</a>	</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Navbar