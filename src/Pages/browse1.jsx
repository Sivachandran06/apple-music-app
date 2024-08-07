import React, { useEffect, useState } from "react";
import MusicList from "../Components/MusicList";

function Browse1() {
    const [musicList, setMusicList] = useState([]);

    async function fetchMusicList() {
        let data = localStorage.getItem('musiclist')
        if (data) {
            data = JSON.parse(data)
        } else {
            const url = "https://academics.newtonschool.co/api/v1/music/album";
            const myHeaders = new Headers();
            myHeaders.append("projectId", "22uq494gh842");
            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };
            const response = await fetch(url, requestOptions);
            const result = await response.json();
            data = result.data
            localStorage.setItem("musiclist", JSON.stringify(result.data))
        }
        setMusicList(data); // Save data to state
        console.log(data, "data");
    }

    useEffect(() => {
        fetchMusicList();
    }, []);

    return (
        <>
            <div className="MainContainerSection">
                <div className="BrowserBanner">
                    <section>
                        {musicList.map((music) => {
                            const { title, _id, audio_url,
                                description } = music;
                            // {
                            //     /* TODO: music card */
                            // }
                            return (

                                <div
                                    onClick={() => setMusicList({
                                        title,
                                        _id,
                                        audio_url

                                    })}>
                                    {title} - {_id}- {description} -{audio_url}
                                    <MusicList songs={music.songs} title={"SMART SIVA"} />
                                </div>
                            );
                        })}
                    </section>
                </div>
            </div>
        </>
    );
}

export default Browse1;