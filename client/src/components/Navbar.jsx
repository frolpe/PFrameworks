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
                    <li>
                        {isAuthenticated ? (
                            <>
                                <Link to={'/skills'} className="navLinks">Portafolio</Link>
                                <Link to={'/'} className="navLinks" onClick={() => { logout(); }}>Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link to={'/login'} className="navLinks">Login</Link>
                                <Link to={'/register'} className="navLinks">Register</Link>
                            </>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;