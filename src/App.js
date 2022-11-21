import Main from "./components/Main";
import { useState } from "react";
import Quiz from "./components/Quiz";

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const [checkGamePin, setcheckGamePin] = useState({
    isGamePin: false,
    isGameTrigger: false,
  });

  const questionsArray = ["Question 1: What is the capital of Germany?"];
  function checkGamePIN(inputGameValue) {
      if (/^\d+$/.test(inputGameValue) && inputGameValue.length === 4) {
        setcheckGamePin(prevValue => {
          return {
            isGamePinValide: true,
            isGameTrigger: true,
          };
        })
        setTimeout(() => setStartGame(true), 2000);
      } else if(typeof inputGameValue === "undefined" || inputGameValue.length > 4 || inputGameValue.length < 4) {
        setcheckGamePin(prevValue => {
          return {
            isGamePinValide: false,
            isGameTrigger: true,
          };
        })
      }
  }
  return (
    <div>
      {!startGame ? <Main checkGamePIN={checkGamePIN} checkGamePin={checkGamePin}/> : <Quiz question={questionsArray[0]} />}
    </div>
  );
}
