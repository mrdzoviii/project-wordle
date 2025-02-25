import { sample } from "utils";
import { WORDS } from "data";
import GuessInput from "components/GuessInput";
import { useState } from "react";
import GuessRecords from "components/GuessRecords";

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
  const [guesses, setGuesses] = useState<GuessRecord[]>([]);
  const onGuess = (guess: string) => {
    setGuesses([...guesses, { guess, id: crypto.randomUUID() }]);
  };

  return (
    <>
      <GuessRecords guessRecords={guesses} answer={answer} />
      <GuessInput guess={guess} setGuess={setGuess} onGuess={onGuess} />
    </>
  );
}

export default Game;
