import React from "react";

export default function NextLevel({ onNextLevel }) {
  return (
    <div className="overlay">
      <div className="game-over message-box">
        <h1>¡Bien, avanzas de nivel!</h1>
        <button className="nextLevelBtn" onClick={onNextLevel}>
          ¡Siguiente Nivel!
        </button>
      </div>
    </div>
  );
}
