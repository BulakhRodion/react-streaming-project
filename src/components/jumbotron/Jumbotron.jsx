import "./jumbotron.scss"

export default function Jumbotron({direction, index, videoF, videoS}) {

    const imageLinks = [
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
        "https://occ-0-4922-1490.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
    ]

    const itemTitles = [
        "Enjoy on your TV.", "Download your shows to watch offline.", "Watch everywhere.", "Create profiles for kids."
    ]

    const itemText = [
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        "Save your favorites easily and always have something to watch.",
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
        "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
    ]

    const videoLinks = [
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
    ]

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
                                <video src={videoLinks[0]} autoPlay={true} loop className="jumbotron_video-first"/>
                            </>
                        )}
                        {videoS && (
                            <>
                                <video src={videoLinks[1]} autoPlay={true} loop className="jumbotron_video-second"/>
                            </>
                        )}
                        <img className="jumbotron_image" src={imageLinks[index]} alt="Jumbotron poster"/>
                    </div>
                </div>
            </div>
        </div>
    )
}