import "./accordion.scss"
import {Data} from "./Data"
import {Add, Close} from "@material-ui/icons";
import {useEffect, useRef, useState} from "react";

export default function Accordion() {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`100%`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    return(
        <div className="accordion">
            <h2 className="accordion_title">Frequently Asked Questions</h2>
            {Data.map((item, index) =>{
                return (<div className="accordion_item" key={index}>
                    <button
                        onClick={toggleState}
                        id={item.id}
                        className="accordion_visible">
                        <span className="accordion_item-title" >{item.question}</span>
                        {toggle ? <Close /> : <Add />}
                    </button>

                    <div
                        className={toggle? "accordion_toggle animated" : "accordion_toggle"}
                        style={{height: toggle? `${heightEl}` : "0px" }}
                        ref={refHeight}>
                        <p className="accordion_text">
                            {item.answer}
                        </p>
                    </div>
                </div>)
            })}
        </div>
    )
}