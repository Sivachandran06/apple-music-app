import React, { useState } from 'react';
import './PlayerControlModule.css';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

const PlayerControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeatMode, setRepeatMode] = useState('none');

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleRepeatMode = () => {
    if (repeatMode === 'all') {
      setRepeatMode('one'); // Switch to repeat one
    } else {
      setRepeatMode('all'); // Switch back to repeat all
    }
  };

  const getPlayPauseIcon = () => {
    return isPlaying ? <PauseRoundedIcon style={{ color:"red", fontSize:"42px"}}/> : <PlayArrowRoundedIcon style={{color:'red',  fontSize:"42px"}} />;
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
      </button>
      <button className="control-btn filter-gray">
        <img src='Next.svg' alt="Next Icon"  /> {/* Next */}
      </button>
      <button className="control-btn filter-gray" onClick={toggleRepeatMode}>
        <img src={getRepeatIcon()} alt="Repeat Icon" /> {/* Repeat */}
      </button>
    </div>
  );
};

export default PlayerControls;
