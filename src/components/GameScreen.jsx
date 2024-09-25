import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import NextLevel from "./NextLevel";

export default function GameScreen({
  character,
  characters,
  onGameOver,
  onWin,
}) {
  const [timeLeft, setTimeLeft] = useState(20); // Temporizador de 20 segundos
  const [charactersInGame, setCharactersInGame] = useState([]);
  const [isGameStart, setIsGameStart] = useState(false);
  const [timesGuessed, setTimesGuessed] = useState(0);
  const [level, setLevel] = useState(1);
  const [charactersByLevel, setcharactersByLevel] = useState(29);
  const [isNextLevel, setIsNextLevel] = useState(false);
  const [totalRightCharacters, setTotalRightCharacters] = useState(3);

  const handleNextLevel = () => {
    console.log("Avanzar al siguiente nivel");
    setTimeLeft(20 - level * 2);
    setTimesGuessed(0);
    setTotalRightCharacters(totalRightCharacters + 1);
  };

  const onGuessCharacter = (guessChar) => {
    //console.log(guessChar.name + " - ID: " + guessChar.id);

    if (guessChar.name === character.name) {
      console.log("Quitar personaje del arreglo");
      setCharactersInGame(
        charactersInGame.filter((c) => c.id !== guessChar.id)
      );
      setTimesGuessed(timesGuessed + 1);
      console.log("timesGuessed: " + timesGuessed);
    } else {
      console.log("Seguir intentando");
    }
  };

  useEffect(() => {
    // Genera personajes aleatorios para el nivel
    const generateCharacters = () => {
      const otherChars = characters.filter((c) => c.name !== character.name);
      // Crear un arreglo con el personaje seleccionado repetido 2+Nvl
      // Donde Nvles 1, 2, 3, 4, 5
      console.log("Personajes correctos: " + totalRightCharacters);
      let gameCharacters = Array(totalRightCharacters).fill(character);
      let gameCharactersWithId = Array(30 + level * 2);

      console.log("Nivel: " + level);
      console.log("Personajes correctos: " + totalRightCharacters);
      console.log("Personajes en juego: " + gameCharactersWithId.length);
      console.log("Veces adivinado: " + timesGuessed);

      // Rellenar el resto del arreglo con personajes aleatorios
      // Se resta el número de personajes correctos por nivel
      for (let i = 0; i < gameCharactersWithId.length - 3; i++) {
        // Suponiendo que quieres un total de 32 personajes
        const randomIndex = Math.floor(Math.random() * otherChars.length);
        gameCharacters.push(otherChars[randomIndex]);
      }

      gameCharacters.forEach((c, index) => {
        let char = {
          name: c.name,
          image: c.image,
          id: index,
        };
        gameCharactersWithId.push(char);
      });

      gameCharactersWithId = gameCharactersWithId.sort(
        () => 0.5 - Math.random()
      );

      return gameCharactersWithId;
    };

    // Solo generar los personajes al inicio del juego
    // Y cuando avance de nivel
    if (!isGameStart) {
      console.log("Inicializar nivel");
      setTimeLeft(20 - level * 2);
      setTotalRightCharacters(2 + level);
      //setTimesGuessed(0);
      setCharactersInGame(generateCharacters());
    }

    if (timeLeft > 0) {
      if (timesGuessed < totalRightCharacters) {
        setIsGameStart(true);
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        console.log("Avanza al nivel: " + level);
        setIsNextLevel(true);
        setLevel(level + 1);
        setIsGameStart(false);
      }
    } else {
      onGameOver();
    }
  }, [timeLeft]);

  return (
    <>
      {isNextLevel && !isGameStart && (
        <NextLevel onNextLevel={handleNextLevel} />
      )}
      <div className="stats-box">
        <p>
          {character.name} escondidos: {totalRightCharacters - timesGuessed}
        </p>
        <p>Tiempo restante: {timeLeft}</p>
        <p>Errores: 0</p>
      </div>
      <animated.div
        style={useSpring({
          transform: "scale(1)",
          from: { transform: "scale(0.8)" },
        })}
      >
        <div className="game-screen-grid">
          {charactersInGame.map((c, i) => (
            <div key={c.name + i} className="character">
              <img
                key={c.name + i}
                src={c.image}
                alt={c.name}
                onClick={(e) => onGuessCharacter(c, i)}
              />
            </div>
          ))}
        </div>
      </animated.div>
    </>
  );
}
