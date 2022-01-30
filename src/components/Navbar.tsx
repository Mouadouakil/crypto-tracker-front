import React from "react";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import { playSound } from "../utils";

interface Props {
  setSoundActive: Function;
  soundActive: boolean;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  tempAlertAtMinimum: number;
  setTempAlertAtMinimum: Function;
  showDeals: boolean;
  setShowDeals: Function;
  showFavorites: boolean;
  setShowFavorites: Function;
}

function Navbar({
  setSoundActive,
  soundActive,
  audioRef,
  handleSubmit,
  tempAlertAtMinimum,
  setTempAlertAtMinimum,
  setShowDeals,
  showDeals,
  setShowFavorites,
  showFavorites,
}: Props) {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <div
          className="sound"
          onClick={() => {
            setSoundActive(!soundActive);
            !soundActive && playSound(audioRef);
          }}
        >
          {soundActive ? <MdVolumeUp /> : <MdVolumeOff />}
        </div>
        <button onClick={() => setShowDeals(!showDeals)}>
          {showDeals ? <>Show all</> : <>Show only greens</>}
        </button>
        <button onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? <>Show all</> : <>Show only favorites</>}
        </button>
      </div>
      <div className="right-navbar">
        <div className="alert-at">
          Alert at:
          <form onSubmit={handleSubmit}>
            <input
              required
              type="number"
              value={tempAlertAtMinimum}
              onChange={(e) => setTempAlertAtMinimum(e.target.value)}
            />
            <input type="submit" value="Apply" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
