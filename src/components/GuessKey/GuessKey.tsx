import classNames from "classnames";

interface GuessKeyProps {
  letter: string;
  className?: string;
}
function GuessKey({ letter, className }: GuessKeyProps) {
  return (
    <div className={classNames("guess-keyboard-key", className)}>{letter}</div>
  );
}

export default GuessKey;
