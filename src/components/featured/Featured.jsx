import "./featured.scss"
import {InfoOutlined, PlayArrow} from "@material-ui/icons";
import { searchSingle } from '../../requests/requests';
import {useEffect, useState} from "react";
import poster from '../../assets/images/no-poster.png';

export default function Featured({type}) {

    const [single, setSingle] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        const res = await searchSingle();
        setSingle(res)
        setIsLoading(true);
    }, [])

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <div className="featured_img-wrapper">
                <img src={isLoading ? single.image?.original : poster } alt="Show poster"/>
            </div>
            <div className="featured_info">
                <h1>{isLoading ? single.name : "No title"}</h1>
                <span className="featured_info-description">{isLoading ? single.summary : "No description availiable"}</span>
                <div className="featured_buttons">
                    <button className="featured_buttons-play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="featured_buttons-info">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}