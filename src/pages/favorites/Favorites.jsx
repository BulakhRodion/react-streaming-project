import './favorites.scss'
import {useEffect, useState} from "react";
import {ErrorOutline, ArrowBackIosOutlined} from "@material-ui/icons";
import {Link} from "react-router-dom";
import FavoritesCard from "../../components/favoritescard/FavoritesCard";

export default function Favorites() {

    const [showFavorites, setShowFavorites] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('authUser'));
        const favsArray = JSON.parse(localStorage.getItem(`${user.uid}`)) || [];
        setShowFavorites(favsArray);
    }, [])

    return (
        <div className="favorites">
            <div className="favorites_container">
                <Link to={{pathname: "/browse"}}>
                    <ArrowBackIosOutlined className="favorites_back"/>
                </Link>
                {
                    showFavorites.length ? (
                            showFavorites.map((item) => (
                                <FavoritesCard item={item} key={item.id}/>
                            ))
                    ) : (
                        <div className="favorites_without-content">
                            <ErrorOutline className="favorites_icon"/>
                            <p className="favorites_text">There are no items in the Favorites section. Go back to add
                                them. </p>
                        </div>)
                }
            </div>
        </div>
    )
}