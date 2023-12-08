import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../pages/Login/logo1-removebg-preview.png";


function Navbar() {

    const { isAuthenticated, logout } = useAuth();

    return (
        <div className="headerNav">
            <div className="LogoNav">
                <Link to={'/'}><img src={logo} /></Link>
            </div>
            <nav>
                <ul className="navLinks">
                    <li style={{'display': 'inline-block', 'padding': '20px'}}>
                        {isAuthenticated ? (
                            <>
                                <Link to={'/skills'} style={{'display': 'inline-block', 'padding': '20px' ,'font-size': '700', 'color': '#000000', 'text-decoration': 'none'}}>Portafolio</Link>
                                <Link to={'/skills'} style={{'font-size': '700', 'color': '#000000', 'text-decoration': 'none'}} onClick={() => { logout(); }}>Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link to={'/login'} style={{'display': 'inline-block', 'padding': '20px','font-size': '700', 'color': '#000000', 'text-decoration': 'none'}}>Login</Link>
                                <Link to={'/register'} style={{'font-size': '700', 'color': '#000000', 'text-decoration': 'none'}}>Register</Link>
                            </>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;