import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

function App() {
  const [word, setWord] = useState(getWord);

  const [letters, setLetters] = useState<string[]>([]);

  const incorrectLetters = letters.filter((letter) => !word.includes(letter));

  const loser = incorrectLetters.length >= 6;
  const winner = word.split("").every((letter) => letters.includes(letter));

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (letters.includes(letter) || loser || winner) return;

      setLetters((currentLetters) => [...currentLetters, letter]);
    },
    [letters, loser, winner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetters(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [letters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setLetters([]);
      setWord(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [letters]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center"
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {winner && "WINNER! Refresh to try again!"}
        {loser && "NICE TRY! Refresh to try again!"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={loser} letters={letters} word={word} />
      <Keyboard
        disabled={winner || loser}
        activeLetters={letters.filter((letter) => word.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetters={addGuessedLetters}
      />
    </div>
  );
}

export default App;
