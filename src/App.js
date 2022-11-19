import { useState } from "react";
import Main from "./components/Main";

export default function App() {
  
  function checkGamePIN(inputGameValue) {
    
    if(/^\d+$/.test(inputGameValue) && inputGameValue.length === 4) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
  return (
    <Main checkGamePIN={checkGamePIN} />
  )
}