import './favoritesCard.scss'
import poster from "../../assets/images/no-poster.png";
import {useRef, useState} from "react";

export default function FavoritesCard({item, key}) {

    const [isDeleted, setIsDeleted] = useState(false);

    const removeButton = useRef();

    const saveToLocalStorage = (items) => {
        const user = JSON.parse(localStorage.getItem('authUser'));
        localStorage.setItem(`${user.uid}`, JSON.stringify(items));
    }

    const handleRemove = () => {
        const user = JSON.parse(localStorage.getItem('authUser'));
        const favsArray = JSON.parse(localStorage.getItem(`${user.uid}`)) || [];
        const newFavouriteList = favsArray.filter((item) => item.show.id !== +removeButton.current.value);
        saveToLocalStorage(newFavouriteList);
        setIsDeleted(true);
    }

    return (
        <div className="favorites_card" key={key}
        style={{display: isDeleted ? "none" : "flex"}}>
            <img src={item.show.image ? item.show.image.medium : poster} alt="poster"/>
            <div className="favorites_card-info">
                <button className="favorites_remove" value={item.show.id} ref={removeButton} onClick={handleRemove}>Remove</button>
                <h2 className="favorites_info-title">{item.show.name}</h2>
                <span className="favorites_info-premiered">{item.show.premiered ? new Date(item.show.premiered).getFullYear() : "Non availiable"}</span>
                <span className="favorites_info-language">{item.show.language ? item.show.language : "Non availiable"}</span>
                <span className="favorites_info-rating">{item.show.rating.average ? item.show.rating.average : "No data"}</span>
                <p className="favorites_info-description">{item.show.summary.replace(/<\/?[a-zA-Z]+>/gi, '')}</p>
                <div className="favorites_info-genres">
                    {item.show.genres && item.show.genres.map(item => `${item} `)}
                </div>
            </div>
        </div>
    )
}