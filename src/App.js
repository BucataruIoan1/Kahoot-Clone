import Main from "./components/Main";
import { useState } from "react";

export default function App() {
  const [isGameStart, setIsGameStart] = useState({
    isGamePin: false,
    isGameTrigger: false,
  });

  function checkGamePIN(inputGameValue) {
      if (/^\d+$/.test(inputGameValue) && inputGameValue.length === 4) {
        setIsGameStart(prevValue => {
          return {
            isGamePinValide: true,
            isGameTrigger: true,
          };
        })
      } else if(typeof inputGameValue === "undefined" || inputGameValue.length > 4 || inputGameValue.length < 4) {
        setIsGameStart(prevValue => {
          return {
            isGamePinValide: false,
            isGameTrigger: true,
          };
        })
      }
  }
  return (
    <div>
      <Main checkGamePIN={checkGamePIN} isGameStart={isGameStart} />
    </div>
  );
}
