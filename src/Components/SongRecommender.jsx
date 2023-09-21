import React from 'react'
import modern_songs from "../assets/data/modern_songs.json"
import { useState } from "react";

export default function SongRecommender(){
    const numSongs = Object.keys(modern_songs).length;
    //const [randomID, setRandomID] = useState(0);
    const [songURL, setSongURL] = useState("");

    function filterByID(jsonObject, id) {
        return jsonObject.filter(jsonObject => jsonObject["id"] === id)[0];
    }

    function handleHover(){
        const id = Math.floor(Math.random() * numSongs);
        const url = filterByID(modern_songs, id)["url"];
        setSongURL(url);
    }

    return(
        <div className="recommender-tab" onMouseEnter={()=> handleHover()}>
            <div className="handle"></div>
            <>
                <p>Want a song recommendation?<br/><a href={songURL} target="_blank" rel="noreferrer" className="text-link">Click here</a>.</p>
            </>
        </div>
    )
}