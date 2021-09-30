import "./suggestionsitem.scss"
import {Add, PlayArrow, Remove, ThumbDownOutlined, ThumbUpAltOutlined} from "@material-ui/icons";
import {useEffect, useState} from "react";
import poster from '../../assets/images/no-poster.png';

export default function SuggestionsItem({index, item}) {

    const user = useState(JSON.parse(localStorage.getItem('authUser')));
    const [isHovered, setIsHovered] = useState(false);
    const [favourites, setFavourites] = useState([]);
    const [isAdded, setIsAdded] = useState(false);

    const saveToLocalStorage = (items) => {
        localStorage.setItem(`${user[0].uid}`, JSON.stringify(items))
    }

    const handleAdd = () => {
        const favsArray = JSON.parse(localStorage.getItem(`${user[0].uid}`)) || [];
        const newFavouriteList = [...favsArray, item];
        if (favourites.includes(item)) {
            return null;
        } else {
            setFavourites(newFavouriteList);
            saveToLocalStorage(newFavouriteList);
            setIsAdded(true)
        }
    }
    const handleRemove = () => {
        const newFavouriteList = favourites.filter((fav) => fav.show.id !== item.show.id);
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
        setIsAdded(false);
    }

    useEffect( () => {
        const favsArray = JSON.parse(localStorage.getItem(`${user[0].uid}`)) || [];
        if(favsArray.includes(item)) {
            setIsAdded(true);
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="suggestions-item-space">
                <div className="suggestions-item"
                     style={{left: isHovered && index * 225 - 50 + index * 2.5, zIndex: isHovered && 2}}
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}>
                    <img
                        src={item.show.image ? item.show.image.medium : poster}
                        alt="poster"/>
                    {isHovered && (
                        <>
                            <div className="suggestions-item_info">
                                <div className="icons">
                                    <PlayArrow className="icon"/>
                                    {isAdded ? <Remove className="icon" onClick={handleRemove}/> : <Add className="icon" onClick={handleAdd}/>}
                                    <ThumbUpAltOutlined className="icon"/>
                                    <ThumbDownOutlined className="icon"/>
                                </div>
                                <div className="item-info_head">
                                    <span>{item.show.name ? item.show.name : "Non availiable"}</span>
                                    <span
                                        className="show-language">{item.show.language ? item.show.language : "Non availiable"}</span>
                                    <span>{item.show.premiered ? new Date(item.show.premiered).getFullYear() : "Non availiable"}</span>
                                </div>
                                <div className="item-info_description">
                                    {item.show.summary ? item.show.summary.replace(/<\/?[a-zA-Z]+>/gi, '') : "No description"}
                                </div>
                                <div className="item-info_genre">
                                    {item.show.genres && item.show.genres.map(item => `${item} `)}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}