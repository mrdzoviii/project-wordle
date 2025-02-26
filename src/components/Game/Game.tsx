import { sample } from "utils";
import { WORDS } from "data";
import GuessInput from "components/GuessInput";
import { useState } from "react";
import GuessRecords from "components/GuessRecords";
import { checkGuess } from "game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "constants";
import Banner from "components/Banner";
import GuessKeyboard from "components/GuessKeyboard";
import { generateKeyboardMap } from "components/Game/helpers";

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
  const [keyMap, setKeyMap] = useState<Map<string, string | undefined>>(
    generateKeyboardMap()
  );
  const [numOfGuesses, setNumOfGuesses] = useState(0);
  const [guesses, setGuesses] = useState<GuessRecord[]>([]);
  const onGuess = (guess: string) => {
    setGuesses([...guesses, { guess, id: crypto.randomUUID() }]);
    setNumOfGuesses((prev) => prev + 1);
    const bannerClassName =
      numOfGuesses + 1 < NUM_OF_GUESSES_ALLOWED ? "playing" : "sad";
    const newKeyMap = new Map<string, string>(
      JSON.parse(JSON.stringify(Array.from(keyMap)))
    );
    const guessResults = checkGuess(guess, answer);
    guessResults?.forEach((guessResult) => {
      newKeyMap.set(guessResult.letter, guessResult.status);
    });
    setKeyMap(newKeyMap);
    setGuessOutcome(
      guessResults?.every((guessResult) => guessResult.status === "correct")
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
      <GuessKeyboard keyMap={keyMap} />
      <Banner
        answer={answer}
        status={guessOutcome}
        numberOfGuesses={numOfGuesses}
      />
    </>
  );
}

export default Game;
