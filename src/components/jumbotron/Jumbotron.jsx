import "./jumbotron.scss"
import tv from "../../assets/images/tv.png"
import mobile from "../../assets/images/mobile-0819.jpg"
import device from "../../assets/images/device-pile.png"
import kids from "../../assets/images/kids.png"
import firstVideo from "../../assets/video/first-video.m4v"
import secondVideo from "../../assets/video/second-video.m4v"

export default function Jumbotron({direction, index, videoF, videoS}) {

    const imageLinks = [tv, mobile, device, kids]

    const itemTitles = [
        "Enjoy on your TV.", "Download your shows to watch offline.", "Watch everywhere.", "Create profiles for kids."
    ]

    const itemText = [
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        "Save your favorites easily and always have something to watch.",
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
        "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
    ]

    const videoLinks = [firstVideo, secondVideo]

    return (
        <div className="jumbotron">
            <div className="jumbotron_container">
                <div className="jumbotron_inner"
                     style={{flexDirection: direction === "row-reverse" ? "row-reverse" : "row"}}>
                    <div className="jumbotron_text-wrapper">
                        <h2 className="jumbotron_title">{itemTitles[index]}</h2>
                        <p className="jumbotron_text">{itemText[index]}</p>
                    </div>
                    <div className="jumbotron_media">
                        {videoF && (
                            <>
                                <video src={videoLinks[0]} autoPlay={true} muted={true} loop className="jumbotron_video-first"/>
                            </>
                        )}
                        {videoS && (
                            <>
                                <video src={videoLinks[1]} autoPlay={true} muted={true} loop className="jumbotron_video-second"/>
                            </>
                        )}
                        <img className="jumbotron_image" src={imageLinks[index]} alt="Jumbotron poster"/>
                    </div>
                </div>
            </div>
        </div>
    )
}