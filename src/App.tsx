import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
function App() {
  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [letters, setLetters] = useState<string[]>([]);

  const incorrectLetters = letters.filter((letter) => !word.includes(letter));

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (letters.includes(letter)) return;

      setLetters((currentLetters) => [...currentLetters, letter]);
    },
    [letters]
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
  }, []);

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
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord letters={letters} word={word} />
      <Keyboard
        activeLetters={letters.filter((letter) => word.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetters={addGuessedLetters}
      />
    </div>
  );
}

export default App;
