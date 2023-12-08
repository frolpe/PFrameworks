import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../pages/Login/logo1-removebg-preview.png";
import perfil from "../avatar_male_man_people_person_profile_user_icon_123199.png";


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
                                <Link to={'/portafolio'} style={{'display': 'inline-block', 'padding-right': '20px' ,'font-size': '700', 'color': '#000000', 'text-decoration': 'none'}}>Portafolio</Link>
                                <Link to={'/skills'} style={{'padding-right': '20px' ,'font-size': '700', 'color': '#000000', 'text-decoration': 'none'}} onClick={() => { logout(); }}>Logout</Link>
                                <Link to={'/profile'} style={{'font-size': '700', 'color': '#000000', 'text-decoration': 'none'}}><img style={{'height': '40px'}} src={perfil} /></Link>
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