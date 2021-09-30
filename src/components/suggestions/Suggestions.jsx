import "./suggestions.scss"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import SuggestionsItem from "../suggestionsitem/SuggestionsItem";
import {useEffect, useRef, useState} from "react";
import Loader from "../loader/Loader";
import {searchShows} from '../../requests/requests';


export default function Suggestions({query, isFav, title}) {

    const [shows, setShows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSliderMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        const clickLimit = window.innerWidth / 230;
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 10 - clickLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    useEffect(() => {
        async function fetchData() {
            const res = await searchShows(query);
            setShows(res)
            setIsLoading(false);
        }
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="suggestions">
            <span className="suggestions_title">{title}</span>
            <div className="suggestions_wrapper">
                <ArrowBackIosOutlined
                    className="slider-arrow backward"
                    onClick={() => handleClick("left")}
                    style={{display: !isSliderMoved && "none"}}
                />
                <div className="suggestions_container" ref={listRef}>
                    {isLoading ? (<Loader/>) : (
                        shows.map((item, index) => (
                            <SuggestionsItem index={index} key={item.show.id} item={item}/>))
                    )}
                </div>
                <ArrowForwardIosOutlined
                    className="slider-arrow forward"
                    onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}