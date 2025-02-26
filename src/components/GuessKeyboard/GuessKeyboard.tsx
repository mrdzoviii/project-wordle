import GuessKey from "components/GuessKey";

interface GuessKeyboardProps {
  keyMap: Map<string, string | undefined>;
}

function GuessKeyboard({ keyMap }: GuessKeyboardProps) {
  return (
    <div className="guess-keyboard">
      <div className="guess-keyboard-row">
        <GuessKey letter={"Q"} className={keyMap.get("Q")} />
        <GuessKey letter={"W"} className={keyMap.get("W")} />
        <GuessKey letter={"E"} className={keyMap.get("E")} />
        <GuessKey letter={"R"} className={keyMap.get("R")} />
        <GuessKey letter={"T"} className={keyMap.get("T")} />
        <GuessKey letter={"Y"} className={keyMap.get("Y")} />
        <GuessKey letter={"U"} className={keyMap.get("U")} />
        <GuessKey letter={"I"} className={keyMap.get("I")} />
        <GuessKey letter={"O"} className={keyMap.get("O")} />
        <GuessKey letter={"P"} className={keyMap.get("P")} />
      </div>
      <div className="guess-keyboard-row">
        <GuessKey letter={"A"} className={keyMap.get("A")} />
        <GuessKey letter={"S"} className={keyMap.get("S")} />
        <GuessKey letter={"D"} className={keyMap.get("D")} />
        <GuessKey letter={"F"} className={keyMap.get("F")} />
        <GuessKey letter={"G"} className={keyMap.get("G")} />
        <GuessKey letter={"H"} className={keyMap.get("H")} />
        <GuessKey letter={"J"} className={keyMap.get("J")} />
        <GuessKey letter={"K"} className={keyMap.get("K")} />
        <GuessKey letter={"L"} className={keyMap.get("L")} />
      </div>
      <div className="guess-keyboard-row">
        <GuessKey letter={"Z"} className={keyMap.get("Z")} />
        <GuessKey letter={"X"} className={keyMap.get("X")} />
        <GuessKey letter={"C"} className={keyMap.get("C")} />
        <GuessKey letter={"V"} className={keyMap.get("V")} />
        <GuessKey letter={"B"} className={keyMap.get("B")} />
        <GuessKey letter={"N"} className={keyMap.get("N")} />
        <GuessKey letter={"M"} className={keyMap.get("M")} />
      </div>
    </div>
  );
}

export default GuessKeyboard;
