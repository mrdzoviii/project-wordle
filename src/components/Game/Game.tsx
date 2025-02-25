import { sample } from "utils";
import { WORDS } from "data";
import GuessInput from "components/GuessInput";
import { useState } from "react";
import GuessRecords from "components/GuessRecords";
import { checkGuess } from "game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "constants";
import Banner from "components/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export type GuessRecord = {
  guess: string;
  id: string;
};

function Game() {
  const [guess, setGuess] = useState("");
  const [guessOutcome, setGuessOutcome] = useState<"playing" | "sad" | "happy">(
    "playing"
  );
  const [numOfGuesses, setNumOfGuesses] = useState(0);
  const [guesses, setGuesses] = useState<GuessRecord[]>([]);
  const onGuess = (guess: string) => {
    setGuesses([...guesses, { guess, id: crypto.randomUUID() }]);
    setNumOfGuesses((prev) => prev + 1);
    const bannerClassName =
      numOfGuesses + 1 < NUM_OF_GUESSES_ALLOWED ? "playing" : "sad";
    setGuessOutcome(
      checkGuess(guess, answer)?.every(
        (guessResult) => guessResult.status === "correct"
      )
        ? "happy"
        : bannerClassName
    );
  };

  return (
    <>
      <GuessRecords guessRecords={guesses} answer={answer} />
      <GuessInput
        disabled={
          numOfGuesses >= NUM_OF_GUESSES_ALLOWED || guessOutcome === "happy"
        }
        guess={guess}
        setGuess={setGuess}
        onGuess={onGuess}
      />
      <Banner
        answer={answer}
        status={guessOutcome}
        numberOfGuesses={numOfGuesses}
      />
    </>
  );
}

export default Game;
