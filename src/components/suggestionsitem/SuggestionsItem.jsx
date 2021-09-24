import "./suggestionsitem.scss"
import {Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined} from "@material-ui/icons";
import {useState} from "react";

export default function SuggestionsItem({index}) {

    const [isHovered, setIsHovered] = useState(false);
    const trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"

    return (
        <div className="suggestions-item"
             style={{left: isHovered && index * 225 - 50 + index * 2.5, zIndex: isHovered && 2}}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <img
                src="https://cdn.vox-cdn.com/thumbor/VyBqF-AOSe2epytkcyy6VrjT70g=/0x0:2000x1270/1200x800/filters:focal(840x475:1160x795)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg"
                alt="poster"/>
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop/>
                    <div className="suggestions-item_info">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownOutlined className="icon"/>
                        </div>
                        <div className="item-info_head">
                            <span>1 hour 14 mins</span>
                            <span className="age-restriction">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="item-info_description">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </div>
                        <div className="item-info_genre">Action</div>
                    </div>
                </>
            )}
        </div>
    );
}