import "./navbar.scss";
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";
import {useState} from "react";
import { getAuth, signOut } from 'firebase/auth';
import {Link} from "react-router-dom";
import profile from '../../assets/images/profile.jpg'
import logo from "../../assets/images/newlogo.png";

const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        setScrolled(window.pageYOffset !== 0);
        return () => (window.onscroll = null);
    }

    const handleLogout = (event) => {
        event.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('Logout successful')
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className={ isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="navbar_left">
                    <img src={logo} alt="Netflix logo"/>
                    <span>Series</span>
                    <span>Movies</span>
                    <Link to={{pathname: "/favorites"}} className="navbar_link">
                        <span>Favorites</span>
                    </Link>
                </div>
                <div className="navbar_right">
                    <Search className="navbar_icon"/>
                    <Notifications className="navbar_icon"/>
                    <img src={profile} alt="profile icon"/>
                    <div className="navbar_profile">
                        <ArrowDropDown className="navbar_icon"/>
                        <div className="navbar_profile-options">
                            <span>Setting</span>
                            <span className="navbar_profile-logout" onClick={handleLogout}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;