import "./accordion.scss"
import {Add, Close} from "@material-ui/icons";
import {useEffect, useRef, useState} from "react";

export default function Accordion({data}) {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`100%`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <div className="accordion">
            <div className="accordion_item">
                <button
                    onClick={toggleState}
                    className="accordion_visible">
                    <span className="accordion_item-title">{data.question}</span>
                    {toggle ? <Close/> : <Add/>}
                </button>
                <div
                    className={toggle ? "accordion_toggle animated" : "accordion_toggle"}
                    style={{height: toggle ? `${heightEl}` : "0px"}}
                    ref={refHeight}>
                    <p className="accordion_text">
                        {data.answer}
                    </p>
                </div>
            </div>
        </div>
    )
}