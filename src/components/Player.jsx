import React from "react";
import { useState } from "react";

const Player = ({ defaultName, symbol, isActive, handleNewPlayerNameSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(defaultName);

  const handleEditing = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      handleNewPlayerNameSave(symbol, playerName);
    }
  };

  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            onChange={handlePlayerNameChange}
            type="text"
            value={playerName}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
