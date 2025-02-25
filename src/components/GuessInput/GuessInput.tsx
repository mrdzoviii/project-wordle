interface GuessInputProps {
  guess: string;
  setGuess: (guess: string) => void;
  onGuess: (guess: string) => void;
  disabled?: boolean;
}

function GuessInput({ guess, setGuess, onGuess, disabled }: GuessInputProps) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(ev) => {
        ev.preventDefault();
        onGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        pattern="[A-Z]{5}"
        title="Please enter five letters word"
        value={guess}
        onChange={(ev) => setGuess(ev.target.value.toUpperCase())}
        type="text"
      />
    </form>
  );
}

export default GuessInput;
