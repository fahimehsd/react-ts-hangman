type HangmanWordProps = {
  reveal?: boolean;
  letters: string[];
  word: string;
};

const HangmanWord = ({ reveal = false, letters, word }: HangmanWordProps) => {
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
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility:
                letters.includes(letter) || reveal ? "visible" : "hidden",
              color: !letters.includes(letter) && reveal ? "red" : "black"
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
