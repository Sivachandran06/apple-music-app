import React, { useState } from "react";
import PlayerContext, { SongListContext } from "./PlayerContext";

const Playercontextprovider = ({ Children }) => {
    const [song, setSongs] = useState(null);
    const [songList, setSongList] = useState([])
    return (
        <PlayerContext.Provider value={{ song, setSongs }}>
            <SongListContext.provider value={{ songList, setSongList }}>
                {Children}
            </SongListContext.provider>
        </PlayerContext.Provider>
    )
}

export default Playercontextprovider;