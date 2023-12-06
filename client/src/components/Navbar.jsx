import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Navbar() {

    const {isAuthenticated, logout} = useAuth();

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link className="text-2xl font-bold" to={'/'}>Home</Link>
            <ul className="flex gap-x-2">
                <li>
                    {isAuthenticated ? (
                        <>
                            <Link to={'/skills'}>Portafolio</Link>
                            <Link to={'/'} onClick={() => {
                                logout();
                            }}>Logout</Link>
                        </>
                        ) : (
                        <>
                            <Link to={'/login'}>Login</Link>
                            <Link to={'/register'}>Register</Link>
                        </>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;