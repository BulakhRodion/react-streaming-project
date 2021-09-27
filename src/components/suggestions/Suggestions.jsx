import "./suggestions.scss"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import SuggestionsItem from "../suggestionsitem/SuggestionsItem";
import {useEffect, useRef, useState} from "react";
import Loader from "../loader/Loader";
import { searchShows } from '../../requests/requests';


export default function Suggestions({query}) {

    const [shows, setShows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSliderMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 4) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    useEffect(async () => {
        const res = await searchShows(query);
        setShows(res)
        setIsLoading(false);
    }, [])

    return (
        <div className="suggestions">
            <span className="suggestions_title">Continue to watch</span>
            <div className="suggestions_wrapper">
                <ArrowBackIosOutlined
                    className="slider-arrow backward"
                    onClick={() => handleClick("left")}
                    style={{display: !isSliderMoved && "none"}}
                />
                <div className="suggestions_container" ref={listRef}>
                    {isLoading ? (<Loader />) : (
                        shows.map((item, index) => (
                            <SuggestionsItem index={index} image={item.show.image} descr={item.show.summary}
                                             genres={item.show.genres} premier={item.show.premiered}
                                             lang={item.show.language} key={item.show.id}/>))
                    )}
                </div>
                <ArrowForwardIosOutlined className="slider-arrow forward" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}