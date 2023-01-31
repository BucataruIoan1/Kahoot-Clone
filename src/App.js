import Main from "./components/Main";
import { useState } from "react";
import Quiz from "./components/Quiz";
import nextId from "react-id-generator";
import {data, arrayAnswers} from "./data";
import { Results } from "./components/Results";

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const [checkGamePin, setcheckGamePin] = useState({
    isGamePin: false,
    isGameTrigger: false,
  });
  const [userAnswers, setUserAnswers] = useState([]);
  const [isAnswerClicked, setIsAnswerClicked] = useState(false);
  const [answer, setAnswer] = useState("");
  const [correctOrIncorrect, setCorrectOrIncorrect] = useState(false);
  const [score, setScore] = useState(0);

  function checkGamePIN(inputGameValue) {
    if (/^\d+$/.test(inputGameValue) && inputGameValue.length === 4) {
      setcheckGamePin((prevValue) => {
        return {
          isGamePinValide: true,
          isGameTrigger: true,
        };
      });
      setTimeout(() => setStartGame(true), 2000);
    } else if (
      typeof inputGameValue === "undefined" ||
      inputGameValue.length > 4 ||
      inputGameValue.length < 4
    ) {
      setcheckGamePin((prevValue) => {
        return {
          isGamePinValide: false,
          isGameTrigger: true,
        };
      });
    }
  }

  function calculateScore() {
    for(let i = 0; i < arrayAnswers.length; i++) {
      for(let j = 0; j < userAnswers.length; j++) {
        if(userAnswers[j] === arrayAnswers[i]) {
          setScore(prevValue => prevValue + 1);
        }
      }
    }
  }

  return (
    <div>
      {!startGame ? (
        <Main
          key={nextId()}
          checkGamePIN={checkGamePIN}
          checkGamePin={checkGamePin}
        />
      ) : userAnswers.length === 0 ? (
        <Quiz
          key={nextId()}
          question={data.questionsArray[0]}
          imagesArray={data.imagesArray[0]}
          answerArray={data.answerArray[0]}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isAnswerClicked={isAnswerClicked}
          setIsAnswerClicked={setIsAnswerClicked}
          answer={answer}
          setAnswer={setAnswer}
          correctOrIncorrect={correctOrIncorrect}
          setCorrectOrIncorrect={setCorrectOrIncorrect}
        />
      ) : userAnswers.length === 1 ? (
        <Quiz
          key={nextId()}
          question={data.questionsArray[1]}
          imagesArray={data.imagesArray[1]}
          answerArray={data.answerArray[1]}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isAnswerClicked={isAnswerClicked}
          setIsAnswerClicked={setIsAnswerClicked}
          answer={answer}
          setAnswer={setAnswer}
          correctOrIncorrect={correctOrIncorrect}
          setCorrectOrIncorrect={setCorrectOrIncorrect}
        />
      ) : userAnswers.length === 2 ? (
        <Quiz
          key={nextId()}
          question={data.questionsArray[2]}
          imagesArray={data.imagesArray[2]}
          answerArray={data.answerArray[2]}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isAnswerClicked={isAnswerClicked}
          setIsAnswerClicked={setIsAnswerClicked}
          answer={answer}
          setAnswer={setAnswer}
          correctOrIncorrect={correctOrIncorrect}
          setCorrectOrIncorrect={setCorrectOrIncorrect}
        />
      ) : userAnswers.length === 3 ? (
        <Quiz
          key={nextId()}
          question={data.questionsArray[3]}
          imagesArray={data.imagesArray[3]}
          answerArray={data.answerArray[3]}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isAnswerClicked={isAnswerClicked}
          setIsAnswerClicked={setIsAnswerClicked}
          answer={answer}
          setAnswer={setAnswer}
          correctOrIncorrect={correctOrIncorrect}
          setCorrectOrIncorrect={setCorrectOrIncorrect}
        />
      ) : userAnswers.length === 4 ? (
        <Quiz
          key={nextId()}
          question={data.questionsArray[4]}
          imagesArray={data.imagesArray[4]}
          answerArray={data.answerArray[4]}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isAnswerClicked={isAnswerClicked}
          setIsAnswerClicked={setIsAnswerClicked}
          answer={answer}
          setAnswer={setAnswer}
          correctOrIncorrect={correctOrIncorrect}
          setCorrectOrIncorrect={setCorrectOrIncorrect}
        />
      ) : userAnswers.length === 5 ? (
        <Quiz
          key={nextId()}
          question={data.questionsArray[5]}
          imagesArray={data.imagesArray[5]}
          answerArray={data.answerArray[5]}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isAnswerClicked={isAnswerClicked}
          setIsAnswerClicked={setIsAnswerClicked}
          answer={answer}
          setAnswer={setAnswer}
          correctOrIncorrect={correctOrIncorrect}
          setCorrectOrIncorrect={setCorrectOrIncorrect}
        />
      ) : userAnswers.length === 6 ? (
        <Quiz
          key={nextId()}
          question={data.questionsArray[6]}
          imagesArray={data.imagesArray[6]}
          answerArray={data.answerArray[6]}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isAnswerClicked={isAnswerClicked}
          setIsAnswerClicked={setIsAnswerClicked}
          answer={answer}
          setAnswer={setAnswer}
          correctOrIncorrect={correctOrIncorrect}
          setCorrectOrIncorrect={setCorrectOrIncorrect}
        />
      ) : userAnswers.length === 7 ? (
        <Quiz
          key={nextId()}
          question={data.questionsArray[7]}
          imagesArray={data.imagesArray[7]}
          answerArray={data.answerArray[7]}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isAnswerClicked={isAnswerClicked}
          setIsAnswerClicked={setIsAnswerClicked}
          answer={answer}
          setAnswer={setAnswer}
          correctOrIncorrect={correctOrIncorrect}
          setCorrectOrIncorrect={setCorrectOrIncorrect}
        />
      ) : userAnswers.length === 8 ? (
        <Quiz
          key={nextId()}
          question={data.questionsArray[8]}
          imagesArray={data.imagesArray[8]}
          answerArray={data.answerArray[8]}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isAnswerClicked={isAnswerClicked}
          setIsAnswerClicked={setIsAnswerClicked}
          answer={answer}
          setAnswer={setAnswer}
          correctOrIncorrect={correctOrIncorrect}
          setCorrectOrIncorrect={setCorrectOrIncorrect}
        />
      ) : userAnswers.length === 9 ? (
        <Quiz
          key={nextId()}
          question={data.questionsArray[9]}
          imagesArray={data.imagesArray[9]}
          answerArray={data.answerArray[9]}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isAnswerClicked={isAnswerClicked}
          setIsAnswerClicked={setIsAnswerClicked}
          answer={answer}
          setAnswer={setAnswer}
          correctOrIncorrect={correctOrIncorrect}
          setCorrectOrIncorrect={setCorrectOrIncorrect}
          calculateScore={calculateScore}
        />
      ) :
      (
        <Results 
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
}
