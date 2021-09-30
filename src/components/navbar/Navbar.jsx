import "./navbar.scss";
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";
import {useState} from "react";
import { getAuth, signOut } from 'firebase/auth';
import {Link} from "react-router-dom";
import mainLogo from '../../assets/images/main-logo.png'
import profile from '../../assets/images/profile.jpg'

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
                    <img src={mainLogo} alt="Netflix logo"/>
                    <span>Series</span>
                    <span>Movies</span>
                    <Link to={{pathname: "/favorites"}}>
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