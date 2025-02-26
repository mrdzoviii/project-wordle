interface BannerProps {
  status: "happy" | "sad" | "playing";
  numberOfGuesses: number;
  answer: string;
  resetGame: () => void;
}

function Banner({ status, numberOfGuesses, answer, resetGame }: BannerProps) {
  if (status === "playing") return null;
  if (status === "happy") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numberOfGuesses} guesses</strong>.
        </p>
        <button className="reset-button" onClick={resetGame}>
          Play Again
        </button>
      </div>
    );
  }
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button className="reset-button" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
}

export default Banner;
