import React, { useState, useContext, useRef } from 'react';
import './PlayerControlModule.css';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import { UserContext } from '../../store/userContext';

const PlayerControls = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [repeatMode, setRepeatMode] = useState('none');

  const handlePlayPause = () => {
    let ref = user.audioRef.current;
    console.log(ref ,"ref s ");
    if (user.isPlaying) {
      ref.pause();
      setUser({ ...user, isPlaying: false })
    } else {
      ref.play();
      setUser({ ...user, isPlaying: true })
    }
  };

  const toggleRepeatMode = () => {
    if (repeatMode === 'all') {
      setRepeatMode('one'); // Switch to repeat one
    } else {
      setRepeatMode('all'); // Switch back to repeat all
    }
  };

  const getPlayPauseIcon = () => {
    return user.isPlaying ? <PauseRoundedIcon style={{ color: "red", fontSize: "42px" }} /> : <PlayArrowRoundedIcon style={{ color: 'red', fontSize: "42px" }} />;
  };

  const getRepeatIcon = () => {
    switch (repeatMode) {
      case 'all':
        return 'RepeatAll.svg'; // Icon for repeat all
      case 'one':
        return 'RepeatOne.svg'; // Icon for repeat one
      default:
        return 'RepeatAll.svg'; // Default to repeat all if unexpected state
    }
  };

  return (
    <div className="music-controls">
      <button className="control-btn filter-gray">
        <img src='Shuffle.svg' alt="Shuffle Icon" /> {/* Shuffle */}
      </button>
      <button className="control-btn filter-gray">
        <img src='Previous.svg' alt="Previous Icon" style={{ transform: 'rotate(180deg)' }} /> {/* Previous */}
      </button>
      <button className="control-btn filter-gray" onClick={handlePlayPause}>
        {getPlayPauseIcon()} {/* Play/Pause */}
        <audio
          ref={user.audioRef}
          src={user.song_url}
        />
      </button>
      <button className="control-btn filter-gray">
        <img src='Next.svg' alt="Next Icon" /> {/* Next */}
      </button>
      <button className="control-btn filter-gray" onClick={toggleRepeatMode}>
        <img src={getRepeatIcon()} alt="Repeat Icon" /> {/* Pause and Play */}
      </button>
    </div>
  );
};

export default PlayerControls;
