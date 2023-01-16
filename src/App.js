import Main from "./components/Main";
import { useState } from "react";
import Quiz from "./components/Quiz";
import CircleIcon from "@mui/icons-material/Circle";
import HexagonIcon from "@mui/icons-material/Hexagon";
import SquareIcon from "@mui/icons-material/Square";
import PanoramaHorizontalSelectIcon from "@mui/icons-material/PanoramaHorizontalSelect";
import nextId from "react-id-generator";

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const [checkGamePin, setcheckGamePin] = useState({
    isGamePin: false,
    isGameTrigger: false,
  });
  const [userAnswers, setUserAnswers] = useState([]);

  const questionsArray = [
    "Question 1: What is the capital of Germany?",
    "What is the main programming language for Frontend?",
    "Which is the most popular framework/library for Frontend?",
    "What is the base of Frontend?"
  ];
  const answerArray = [
    [
      {
      className: "answer answer1",
      symbol: <CircleIcon />,
      answerText: "Berlin",
    },
    {
      className: "answer answer2",
      symbol: <HexagonIcon />,
      answerText: "Singapore",
    },
    {
      className: "answer answer3",
      symbol: <SquareIcon />,
      answerText: "Paris",
    },
    {
      className: "answer answer4",
      symbol: <PanoramaHorizontalSelectIcon />,
      answerText: "Madrid",
    }
  ],
  [
    {
    className: "answer answer1",
    symbol: <HexagonIcon />,
    answerText: "Python",
  },
  {
    className: "answer answer2",
    symbol: <SquareIcon />,
    answerText: "Java",
  },
  {
    className: "answer answer3",
    symbol: <PanoramaHorizontalSelectIcon />,
    answerText: "JavaScript",
  },
  {
    className: "answer answer4",
    symbol: <CircleIcon />,
    answerText: "PHP",
  }
],
[
  {
  className: "answer answer1",
  symbol: <PanoramaHorizontalSelectIcon />,
  answerText: "Angular",
},
{
  className: "answer answer2",
  symbol: <CircleIcon />,
  answerText: "React",
},
{
  className: "answer answer3",
  symbol: <HexagonIcon />,
  answerText: "Vue",
},
{
  className: "answer answer4",
  symbol: <SquareIcon />,
  answerText: "Ember",
}
],
[
  {
  className: "answer answer1",
  symbol: <SquareIcon />,
  answerText: "HTML, CSS, JavaScript",
},
{
  className: "answer answer2",
  symbol: <PanoramaHorizontalSelectIcon />,
  answerText: "HTML, CSS, JAVA",
},
{
  className: "answer answer3",
  symbol: <CircleIcon />,
  answerText: "CSS, JAVA, Python",
},
{
  className: "answer answer4",
  symbol: <HexagonIcon />,
  answerText: "React, Angular, Vue",
}
]
    
  ];

  const imagesArray = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RAhno2oXU_GI4J4n1EnBFT0QKtwM9n4kZQ&usqp=CAU",
    "https://flyaps.com/blog/content/images/2020/05/Frame-37-1.png",
    "https://stackdiary.com/wp-content/uploads/2022/02/The-Most-Popular-Front-end-Frameworks.png",
    "https://codedamn.com/assets/images/learnpaths/og/frontend.png"
  ]

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
            question={questionsArray[0]}
            imagesArray={imagesArray[0]}
            answerArray={answerArray[0]}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
          />
      ) : userAnswers.length === 1 ? (
        <Quiz
            key={nextId()}
            question={questionsArray[1]}
            imagesArray={imagesArray[1]}
            answerArray={answerArray[1]}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
          />
      ) : userAnswers.length === 2 ? (
        <Quiz
            key={nextId()}
            question={questionsArray[2]}
            imagesArray={imagesArray[2]}
            answerArray={answerArray[2]}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
          />
      ) : userAnswers.length === 3 ? (
        <Quiz
            key={nextId()}
            question={questionsArray[3]}
            imagesArray={imagesArray[3]}
            answerArray={answerArray[3]}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
          />
      ) : <h1>Answers!!!</h1>
      }
    </div>
  );
}
