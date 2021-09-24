import "./suggestions.scss"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import SuggestionsItem from "../suggestionsitem/SuggestionsItem";
import {useRef, useState} from "react";

export default function Suggestions() {
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
                        <SuggestionsItem index={0}/>
                        <SuggestionsItem index={1}/>
                        <SuggestionsItem index={2}/>
                        <SuggestionsItem index={3}/>
                        <SuggestionsItem index={4}/>
                        <SuggestionsItem index={5}/>
                        <SuggestionsItem index={6}/>
                        <SuggestionsItem index={7}/>
                        <SuggestionsItem index={8}/>
                        <SuggestionsItem index={9}/>
                    </div>
                <ArrowForwardIosOutlined className="slider-arrow forward" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}