import "./suggestions.scss"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import SuggestionsItem from "../suggestionsitem/SuggestionsItem";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

export default function Suggestions() {

    const [shows, setShows] = useState([])
    const [isFetched,setIsFetched] = useState(false);
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

    useEffect(() => {
        const searchShows = async (searchTerm) => {
            const { data } = await axios.get(
                `https://api.tvmaze.com/search/shows?q=${searchTerm}`
            );
            setShows(data);
            setIsFetched(true);
        };

        searchShows('girls')
    }, [])


    return (
        <div className="suggestions">
            <span className="suggestions_title">Continue to watch</span>
            <div className="suggestions_wrapper">
                <ArrowBackIosOutlined
                    className="slider-arrow backward"
                    onClick={()=>handleClick("left")}
                    style={{display: !isSliderMoved && "none"}}
                    />
                    <div className="suggestions_container" ref={listRef}>
                        <SuggestionsItem index={0} item={shows[0]} fetchres={isFetched}/>
                        <SuggestionsItem index={1} item={shows[1]} fetchres={isFetched}/>
                        <SuggestionsItem index={2} item={shows[2]} fetchres={isFetched}/>
                        <SuggestionsItem index={3} item={shows[3]} fetchres={isFetched}/>
                        <SuggestionsItem index={4} item={shows[4]} fetchres={isFetched}/>
                        <SuggestionsItem index={5} item={shows[5]} fetchres={isFetched}/>
                        <SuggestionsItem index={6} item={shows[6]} fetchres={isFetched}/>
                        <SuggestionsItem index={7} item={shows[7]} fetchres={isFetched}/>
                        <SuggestionsItem index={8} item={shows[8]} fetchres={isFetched}/>
                        <SuggestionsItem index={9} item={shows[9]} fetchres={isFetched}/>
                    </div>
                <ArrowForwardIosOutlined className="slider-arrow forward" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}