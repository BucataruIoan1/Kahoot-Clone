import Answer from "./Answer";
import nextId from "react-id-generator";
import { arrayAnswers } from "../data";

export default function Quiz(props) {
  const answerQuizArray = props.answerArray;
  let questionAnswered = "";
  let answerValidation = "";

    if(props.answer === arrayAnswers[0] || props.answer === arrayAnswers[1] || props.answer === arrayAnswers[2] 
      || props.answer === arrayAnswers[3] || props.answer === arrayAnswers[4] || props.answer === arrayAnswers[5]
      || props.answer === arrayAnswers[6] || props.answer === arrayAnswers[7] || props.answer === arrayAnswers[8] || props.answer === arrayAnswers[9]) {
      questionAnswered = "question-answered-correct";
      answerValidation = "Correct";
    }else {
      questionAnswered = "question-answered-incorrect";
      answerValidation = "Incorrect";
    }

  return (
    <div className="quiz-section">
      {!props.correctOrIncorrect ? (
        <div className="question-section">
          <h1 className="question">{props.question}</h1>
        </div>
      ) : (
        <div className={questionAnswered}>
          <h1 className="answer-validation">{answerValidation}</h1>
        </div>
      )}

      <div className="question-image-section">
        <img className="image-question" src={props.imagesArray} alt="main" />
      </div>

      <div className="answer-section">
        {answerQuizArray.map((currentAnswer) => {
          if (currentAnswer.answerText === props.answer) {
            return (
              <Answer
                key={nextId()}
                className={currentAnswer.className}
                id={props.correctOrIncorrect ? currentAnswer.id : null}
                symbol={currentAnswer.symbol}
                answerText={currentAnswer.answerText}
                userAnswers={props.userAnswers}
                setUserAnswers={props.setUserAnswers}
                isAnswerClicked={props.isAnswerClicked}
                setIsAnswerClicked={props.setIsAnswerClicked}
                answer={props.answer}
                setAnswer={props.setAnswer}
                correctOrIncorrect={props.correctOrIncorrect}
                setCorrectOrIncorrect={props.setCorrectOrIncorrect}
                calculateScore={props.calculateScore}
              />
            );
          } else {
            return (
              <Answer
                key={nextId()}
                className={
                  !props.isAnswerClicked
                    ? currentAnswer.className
                    : currentAnswer.disabled
                }
                id={props.correctOrIncorrect ? currentAnswer.id : null}
                disabled={currentAnswer.disabled}
                symbol={currentAnswer.symbol}
                answerText={currentAnswer.answerText}
                userAnswers={props.userAnswers}
                setUserAnswers={props.setUserAnswers}
                isAnswerClicked={props.isAnswerClicked}
                setIsAnswerClicked={props.setIsAnswerClicked}
                answer={props.answer}
                setAnswer={props.setAnswer}
                correctOrIncorrect={props.correctOrIncorrect}
                setCorrectOrIncorrect={props.setCorrectOrIncorrect}
                calculateScore={props.calculateScore}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
