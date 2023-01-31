export default function Answer(props) {
  let answer = "";

  return (
    <div
      className={props.className}
      id={props.id}
      onClick={(event) => {
        props.setAnswer(event.target.innerText);

        props.setIsAnswerClicked((prevValue) => {
          return !prevValue;
        });

        answer = event.target.innerText;
        setTimeout(() => {
          props.setUserAnswers((prevAnswer) => {
            return [...prevAnswer, answer];
          });
        }, 5000);
        setTimeout(() => {
          props.setIsAnswerClicked((prevValue) => {
            return !prevValue;
          });
        }, 5000);

        setTimeout(() => {
          props.setAnswer("");
        }, 5000);

        setTimeout(() => {
          props.setCorrectOrIncorrect(true);
        }, 2000);

        setTimeout(() => {
          props.setCorrectOrIncorrect(false);
        }, 5000);

        if (props.userAnswers.length >= 9) {
          props.calculateScore();
        }
      }}
    >
      {props.symbol}
      <h2>{props.answerText}</h2>
    </div>
  );
}
