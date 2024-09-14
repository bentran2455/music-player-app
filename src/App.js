import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import useMusicPlayer from "./hooks/useMusicPlayer";

const PlayerControls = () => {
  const { togglePlay, playPreviousTrack, playNextTrack, isPlaying } =
    useMusicPlayer();

  return (
    <div className="player-controls">
      <button onClick={playPreviousTrack}>Previous</button>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={playNextTrack}>Next</button>
    </div>
  );
};

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="app-container">
        <h1>My Music Player</h1>
        <TrackList />
        <PlayerControls />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
