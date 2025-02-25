import { GuessRecord } from "components/Game";
import { range } from "utils";
import { NUM_OF_GUESSES_ALLOWED } from "constants";
import Guess from "components/Guess";

interface GuessRecordsProps {
  guessRecords: GuessRecord[];
  answer: string;
}

function GuessRecords({ guessRecords, answer }: GuessRecordsProps) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
        const guessRecord = guessRecords[i] ?? {
          guess: "",
          id: crypto.randomUUID(),
        };
        return (
          <Guess
            answer={answer}
            guess={guessRecord.guess}
            key={guessRecord.id}
            id={guessRecord.id}
          />
        );
      })}
    </div>
  );
}

export default GuessRecords;
