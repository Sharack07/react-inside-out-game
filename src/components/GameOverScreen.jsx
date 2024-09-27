import React from 'react';

export default function GameOverScreen({ onRestart }) {
  return (
    <div className='overlay'>
      <div className="game-over message-box">
        <h1>Has perdido 😭</h1>
        <button className='gameOverBtn' onClick={onRestart}>Volver al inicio</button>
      </div>
    </div>
  );
}
