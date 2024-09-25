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

  function handleKeyDown(e){
    console.log(e)
  }

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
    <div className="App" onKeyDown={(e) => handleKeyDown(e)}>
      <nav>
        <a href="/intensamente">Intensamente</a>
        <a href="/memorama">Memorama</a>
      </nav>
      <div className="game-title">
        <h1>Juego de Intensamente de Ana Pau 💙</h1>
      </div>
      {!isCharacterSelected && (
        <CharacterSelection
          onCharacterSelect={handleCharacterSelect}
          characters={characters}
        />
      )}
      {isCharacterSelected && (
        <GameScreen
          character={character}
          characters={characters}
          onGameOver={handleGameOver}
          onWin={handlWin}
        />
      )}
      {isGameOver && <GameOverScreen onRestart={handleRestart} />}
    </div>
  );
}

export default App;
