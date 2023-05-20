type HangmanWordProps = {
  letters: string[];
  word: string;
};

const HangmanWord = ({ letters, word }: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
      }}
    >
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility: letters.includes(letter) ? "visible" : "hidden"
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
