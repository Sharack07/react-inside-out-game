import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharacterSelection from "./components/CharacterSelection";
import GameScreen from "./components/GameScreen";
import GameOverScreen from "./components/GameOverScreen";

function App() {
  const [character, setCharacter] = useState({ name: "", image: "" });
  const [isGameOver, setIsGameOver] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [isCharacterSelected, setIsCharacterSelected] = useState(false);
  //const {gameOverMessage, setGameOverMessage} = useState("");

  const handleCharacterSelect = (char) => {
    setCharacter(char);
    setIsCharacterSelected(true);
    console.log("Personaje elegido: " + char.name);
  };

  const handleGameOver = () => setIsGameOver(true);
  const handlWin = () => setIsGameOver(false);

  const handleRestart = () => {
    setCharacter(null);
    setIsGameOver(false);
    setIsCharacterSelected(false);
  };

  useEffect(() => {
    setCharacters([
      {
        name: "Alegría",
        image: "/images/alegria.png",
        color: "yellow",
        id: "",
      },
      {
        name: "Tristeza",
        image: "/images/tristeza.png",
        color: "blue",
        id: "",
      },
      {
        name: "Desagrado",
        image: "/images/desagrado.png",
        color: "green",
        id: "",
      },
      { name: "Temor", image: "/images/temor.png", color: "purple", id: "" },
      { name: "Furia", image: "/images/furia.png", color: "red", id: "" },
      {
        name: "Ansiedad",
        image: "/images/ansiedad.png",
        color: "orange",
        id: "",
      },
      { name: "Envidia", image: "/images/envidia.png", color: "cian", id: "" },
      {
        name: "Verguenza",
        image: "/images/verguenza.png",
        color: "pink",
        id: "",
      },
      {
        name: "Aburrimiento",
        image: "/images/aburrimiento.png",
        color: "dark blue",
        id: "",
      },
    ]);
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <div className="game-title">Juego de Intensamente de Ana Pau 💜</div>
        <div>
          <nav>
            <a href="/intensamente">Intensamente</a>
            <a href="/memorama">Memorama</a>
          </nav>
        </div>
      </div>
      <div>
        {!isCharacterSelected && (
          <CharacterSelection
            onCharacterSelect={handleCharacterSelect}
            characters={characters}
          />
        )}
      </div>
      <div>
        {isCharacterSelected && (
          <GameScreen
            character={character}
            characters={characters}
            onGameOver={() => handleGameOver()}
            onWin={handlWin}
          />
        )}
      </div>
      <div>{isGameOver && <GameOverScreen onRestart={handleRestart} />}</div>
      <div className="game-version">
        <p>Sharack Web Apps 2024 - Versión 1.0.6</p>
      </div>
    </div>
  );
}

export default App;
