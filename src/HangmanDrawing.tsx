const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: "50px",
          width: "10px",
          top: 0,
          right: 0,
          backgroundColor: "black",
          position: "absolute"
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          marginLeft: "120px",
          backgroundColor: "black"
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
          backgroundColor: "black"
        }}
      />
      <div
        style={{ height: "10px", width: "250px", backgroundColor: "black" }}
      />
    </div>
  );
};

export default HangmanDrawing;
