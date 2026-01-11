import { Link, useNavigate } from "react-router-dom";
import "./../App.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";

function Navbar() {
    const email = useSelector((state) => state.auth.email);
    console.log("Navbar email:", email)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    ;
    const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="logo">
                🚚 <span>GloLogistics</span>
            </div>

            <ul className="nav-links">
                <li>
                    <Link to="#" className="nav-item">Investors</Link>
                </li>

                <li>
                    <Link to="/services/shipments" className="nav-item">Services</Link>
                </li>

                <li>
                    <Link to="/about" className="nav-item">About Us</Link>
                </li>

                <li>
                    <Link to="/contact" className="nav-item">Contact Us</Link>
                </li>

                {email && (
                    <li onClick={handleLogout} className="nav-item logout-btn">
                        Logout
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
