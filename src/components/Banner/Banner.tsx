interface BannerProps {
  status: "happy" | "sad" | "playing";
  numberOfGuesses: number;
  answer: string;
}

function Banner({ status, numberOfGuesses, answer }: BannerProps) {
  if (status === "playing") return null;
  if (status === "happy") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numberOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  }
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Banner;
