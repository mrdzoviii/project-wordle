import { range } from "utils";

interface GuessProps {
  guess: string;
  id: string;
}

function Guess({ guess, id }: GuessProps) {
  const guessChars = guess
    ? guess.toUpperCase().split("")
    : range(0, 5).map(() => "");
  return (
    <p className="guess">
      {guessChars.map((char, i) => (
        <span key={`${id}${i}`} className="cell">
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;
