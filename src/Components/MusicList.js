import React, { useEffect, useState } from "react";


function MusicList(props) {
  const [musicList, setMusicList] = useState([]);


  useEffect(() => {
    setMusicList(props.songs);
    console.log(props, "props");
  }, [musicList, props]);


  return (
    <div className='MusicList'>
      <h1>MusicList</h1>
      <p>{props.title}</p>
      {musicList.map((item) => {
        return (
          <>
            <img alt="thumbnail" src={item.thumbnail}></img>
          </>
        )
      })}
    </div>
  )
}

export default MusicList;