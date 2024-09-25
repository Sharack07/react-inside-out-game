import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function CharacterSelection({ onCharacterSelect, characters }) {
  useEffect(() => {
    // console.log("useEffect CharacterSelection");
    // console.log("Personajes desde CharacterSelection");
    console.log(characters);
  }, []);

  return (
    <>
      <div className="game-title">
        <h2>Elige un personaje</h2>
      </div>
      <div className="character-selection">
        <animated.div
          className="characters"
          style={useSpring({
            transform: "scale(1)",
            from: { transform: "scale(0.5)" },
          })}
        >
          {characters.map((char) => (
            <div
              key={char.name}
              onClick={() => onCharacterSelect(char, characters)}
              className="character"
            >
              <img src={char.image} alt={char.name} />
              <p>{char.name}</p>
            </div>
          ))}
        </animated.div>
      </div>
    </>
  );
}
