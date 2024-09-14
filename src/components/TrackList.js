import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
const TrackList = () => {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying,
    currentTrackIndex,
  } = useMusicPlayer();

  return (
    <>
      {trackList.map((track, index) => (
        <div
          key={index}
          className={`song-title ${
            currentTrackIndex === index ? "playing" : ""
          }`}
          onClick={() => playTrack(index)}
        >
          {track.name}
          {currentTrackIndex === index && isPlaying ? (
            <span> (Playing)</span>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

export default TrackList;
