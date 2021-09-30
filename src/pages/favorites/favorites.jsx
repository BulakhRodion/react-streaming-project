import './favorites.scss'
import {useEffect, useState} from "react";

export default function Favorites() {

    const [showFavorites, setShowFavorites] = useState([])

    useEffect(() => {
        const user = useState(JSON.parse(localStorage.getItem('authUser')));
        const favsArray = JSON.parse(localStorage.getItem(`${user[0].uid}`)) || [];

        setShowFavorites(favsArray)
    }, [])

    return (
        <div>test</div>
    )
}