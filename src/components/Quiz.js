import Answer from './Answer';
import nextId from "react-id-generator";

export default function Quiz(props) {

    const answerQuizArray = props.answerArray;

  return (
    <div className="quiz-section">
      <div className="question-section">
        <h1 className="question">
          {props.question}
        </h1>
      </div>
      <div className="question-image">
        <img
          className='image-question'
          src={props.imagesArray}
          alt="main"
        />
      </div>

      <div className="answer-section">

        {answerQuizArray.map(currentAnswer => {
            return <Answer
              key={nextId()}
              className={currentAnswer.className} 
              symbol={currentAnswer.symbol} 
              answerText={currentAnswer.answerText}
              userAnswers={props.userAnswers}
              setUserAnswers={props.setUserAnswers}
              />
        })}

      </div>
    </div>
  );
}
