import { range } from "utils";
import { checkGuess, GuessResult } from "game-helpers";
import classNames from "classnames";

interface GuessProps {
  guess: string;
  id: string;
  answer: string;
}

function Guess({ guess, id, answer }: GuessProps) {
  const guessOutcome = checkGuess(guess, answer);
  const guessChars =
    guessOutcome ||
    range(0, 5).map<GuessResult>(() => ({
      letter: "",
      status: "",
    }));
  return (
    <p className="guess">
      {guessChars.map((char, i) => (
        <span key={`${id}${i}`} className={classNames("cell", char.status)}>
          {char.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
