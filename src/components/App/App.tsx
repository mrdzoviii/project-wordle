import Game from "../Game";
import Header from "../Header";
import { useState } from "react";
import { sample } from "utils";
import { WORDS } from "data";

function App() {
  const [resetKey, setResetKey] = useState(crypto.randomUUID());
  const [answer, setAnswer] = useState(sample(WORDS));

  function onGameReset() {
    setResetKey(crypto.randomUUID());
    setAnswer(sample(WORDS));
  }

  console.log({ answer });
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game key={resetKey} answer={answer} resetGame={onGameReset} />
      </div>
    </div>
  );
}

export default App;
