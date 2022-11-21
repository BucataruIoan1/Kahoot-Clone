import CircleIcon from '@mui/icons-material/Circle';
import HexagonIcon from '@mui/icons-material/Hexagon';
import SquareIcon from '@mui/icons-material/Square';
import PanoramaHorizontalSelectIcon from '@mui/icons-material/PanoramaHorizontalSelect';
import Answer from './Answer';

export default function Quiz(props) {

    const answerArray = [
        {
            className: "answer answer1",
            symbol: <CircleIcon />,
            answerText: "Berlin"
        },
        {
            className: "answer answer2",
            symbol: <HexagonIcon />,
            answerText: "Singapore"
        },
        {
            className: "answer answer3",
            symbol: <SquareIcon />,
            answerText: "Madrid"
        },
        {
            className: "answer answer4",
            symbol: <PanoramaHorizontalSelectIcon />,
            answerText: "Madrid"
        }
    ]

  return (
    <div className="quiz-section">
      <div className="question-section">
        <h1 className="question">
          {props.question}
        </h1>
      </div>
      <div className="question-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RAhno2oXU_GI4J4n1EnBFT0QKtwM9n4kZQ&usqp=CAU"
          alt="main"
        />
      </div>

      <div className="answer-section">

        {answerArray.map(currentAnswer => {
            return <Answer className={currentAnswer.className} symbol={currentAnswer.symbol} answerText={currentAnswer.answerText}/>
        })}




      </div>
    </div>
  );
}
