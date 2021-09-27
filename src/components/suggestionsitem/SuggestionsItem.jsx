import "./suggestionsitem.scss"
import {Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined} from "@material-ui/icons";
import {useState} from "react";
import poster from '../../assets/images/no-poster.png';

export default function SuggestionsItem({index, image, descr, genres, premier, lang}) {

    const [isHovered, setIsHovered] = useState(false);
    const premDay = new Date(premier);

    return (
        <>
            <div className="suggestions-item"
                 style={{left: isHovered && index * 225 - 50 + index * 2.5, zIndex: isHovered && 2}}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>
                <img
                    src={image ? image.medium : poster}
                    alt="poster"/>
                {isHovered && (
                    <>
                        <div className="suggestions-item_info">
                            <div className="icons">
                                <PlayArrow className="icon"/>
                                <Add className="icon"/>
                                <ThumbUpAltOutlined className="icon"/>
                                <ThumbDownOutlined className="icon"/>
                            </div>
                            <div className="item-info_head">
                                <span>1 hour 14 mins</span>
                                <span className="show-language">{lang ? lang : "Non availiable"}</span>
                                <span>{premier ? premDay.getFullYear() : "Non availiable"}</span>
                            </div>
                            <div className="item-info_description">
                                {descr ? descr : "No description"}
                            </div>
                            <div className="item-info_genre">
                                {genres ? genres.map(item => `${item} `) : "Non availiable"}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}