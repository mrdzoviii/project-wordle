import { GuessRecord } from "components/Game";
import { range } from "utils";
import { NUM_OF_GUESSES_ALLOWED } from "constants";
import Guess from "components/Guess";

interface GuessRecordsProps {
  guessRecords: GuessRecord[];
}

function GuessRecords({ guessRecords }: GuessRecordsProps) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
        const guessRecord = guessRecords[i] ?? {
          guess: "",
          id: crypto.randomUUID(),
        };
        return (
          <Guess
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
