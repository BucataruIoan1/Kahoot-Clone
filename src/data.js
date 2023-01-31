import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import HexagonIcon from "@mui/icons-material/Hexagon";
import SquareIcon from "@mui/icons-material/Square";
import PanoramaHorizontalSelectIcon from "@mui/icons-material/PanoramaHorizontalSelect";

const data = {
  questionsArray: [
    "Question 1: What does HTML stand for?",
    "Question 2: Which of the following HTML Elements is used for making any text bold?",
    "Question 3: Which of the following HTML element is used for creating an unordered list?",
    "Question 4: How many heading tags are there in HTML5?",
    "Question 5: Which of the following attributes is used to add link to any element?",
    "Question 6: Which tag is used to add an header in HTML5 table?",
    "Question 7: What is the purpose of using div tags in HTML?",
    "Question 8: Which of the following tags is used to add a line-break in HTML?",
    "Question 9: Which tag is used for creating a drop-down selection list?",
    "Question 10: How is document type initialized in HTML5?"
  ],
  imagesArray: [
    "https://c4.wallpaperflare.com/wallpaper/887/817/276/html-5-html-5-logo-wallpaper-preview.jpg",
    "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.jpg",
    "https://www.freecodecamp.org/news/content/images/2022/03/pexels-pixabay-270404.jpg",
    "https://media.istockphoto.com/id/1408445036/photo/programming-web-pages-with-html-and-css-code-on-a-desktop-computer.jpg?b=1&s=170667a&w=0&k=20&c=8bzVsHnZpYnd11a97dRNSgGuuzXMP3qA5zqTGB7j97c=",
    "https://imagekit.io/blog/content/images/2020/12/image-resizing-html.jpg",
    "https://cdn.educba.com/academy/wp-content/uploads/2020/01/Select-Tag-in-HTML.jpg",
    "https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all",
    "https://www.herzing.edu/sites/default/files/2020-09/it_computer_programming.jpg",
    "https://www.thoughtco.com/thmb/aS6zMjpwJyEsyMUBRLAq7cNkENE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/warning--data-transfer-in-progress-507065943-59c6d2a70d327a001141794d-5bb792f246e0fb0051a88f9c.jpg",
    "https://repository-images.githubusercontent.com/486226419/99587ec7-b54b-4ccc-9d8e-eae9cbbc6f9e"
  ],
  answerArray: [
    [
      {
        className: "answer answer1",
        id: "correct",
        disabled: "answer answer1-disabled",
        symbol: <CircleIcon />,
        answerText: "Hyper Text Markup Language",
      },
      {
        className: "answer answer2",
        id: "incorrect",
        disabled: "answer answer2-disabled",
        symbol: <HexagonIcon />,
        answerText: "Hyperlinks and Text Markup Language",
      },
      {
        className: "answer answer3 ",
        id: "incorrect",
        disabled: "answer answer3-disabled",
        symbol: <SquareIcon />,
        answerText: "Home Tool Markup Language",
      },
      {
        className: "answer answer4",
        id: "incorrect",
        disabled: "answer answer4-disabled",
        symbol: <PanoramaHorizontalSelectIcon />,
        answerText: "Hey Too Much Layout",
      },
    ],
    [
      {
        className: "answer answer1",
        id: "incorrect",
        disabled: "answer answer1-disabled",
        symbol: <HexagonIcon />,
        answerText: "<p>",
      },
      {
        className: "answer answer2",
        id: "incorrect",
        disabled: "answer answer2-disabled",
        symbol: <SquareIcon />,
        answerText: "<i>",
      },
      {
        className: "answer answer3",
        id: "incorrect",
        disabled: "answer answer3-disabled",
        symbol: <PanoramaHorizontalSelectIcon />,
        answerText: "<li>",
      },
      {
        className: "answer answer4",
        id: "correct",
        disabled: "answer answer4-disabled",
        symbol: <CircleIcon />,
        answerText: "<b>",
      },
    ],
    [
      {
        className: "answer answer1",
        id: "incorrect",
        disabled: "answer answer1-disabled",
        symbol: <PanoramaHorizontalSelectIcon />,
        answerText: "<ui></ui>",
      },
      {
        className: "answer answer2",
        id: "incorrect",
        disabled: "answer answer2-disabled",
        symbol: <CircleIcon />,
        answerText: "<i></i>",
      },
      {
        className: "answer answer3",
        id: "incorrect",
        disabled: "answer answer3-disabled",
        symbol: <HexagonIcon />,
        answerText: "<em></em>",
      },
      {
        className: "answer answer4",
        id: "correct",
        disabled: "answer answer4-disabled",
        symbol: <SquareIcon />,
        answerText: "<ul></ul>",
      },
    ],
    [
      {
        className: "answer answer1",
        id: "incorrect",
        disabled: "answer answer1-disabled",
        symbol: <SquareIcon />,
        answerText: "2",
      },
      {
        className: "answer answer2",
        id: "incorrect",
        disabled: "answer answer2-disabled",
        symbol: <PanoramaHorizontalSelectIcon />,
        answerText: "3",
      },
      {
        className: "answer answer3",
        id: "incorrect",
        disabled: "answer answer3-disabled",
        symbol: <CircleIcon />,
        answerText: "5",
      },
      {
        className: "answer answer4",
        id: "correct",
        disabled: "answer answer4-disabled",
        symbol: <HexagonIcon />,
        answerText: "6",
      },
    ],
    [
      {
        className: "answer answer1",
        id: "incorrect",
        disabled: "answer answer1-disabled",
        symbol: <SquareIcon />,
        answerText: "link",
      },
      {
        className: "answer answer2",
        id: "incorrect",
        disabled: "answer answer2-disabled",
        symbol: <PanoramaHorizontalSelectIcon />,
        answerText: "ref",
      },
      {
        className: "answer answer3",
        id: "correct",
        disabled: "answer answer3-disabled",
        symbol: <CircleIcon />,
        answerText: "href",
      },
      {
        className: "answer answer4",
        id: "incorrect",
        disabled: "answer answer4-disabled",
        symbol: <HexagonIcon />,
        answerText: "newref",
      },
    ],
    [
      {
        className: "answer answer1",
        id: "incorrect",
        disabled: "answer answer1-disabled",
        symbol: <SquareIcon />,
        answerText: "<theader></theader>",
      },
      {
        className: "answer answer2",
        id: "incorrect",
        disabled: "answer answer2-disabled",
        symbol: <PanoramaHorizontalSelectIcon />,
        answerText: "<h1></h1>",
      },
      {
        className: "answer answer3",
        id: "correct",
        disabled: "answer answer3-disabled",
        symbol: <CircleIcon />,
        answerText: "<th></th>",
      },
      {
        className: "answer answer4",
        id: "incorrect",
        disabled: "answer answer4-disabled",
        symbol: <HexagonIcon />,
        answerText: "<header></header>",
      },
    ],
    [
      {
        className: "answer answer1",
        id: "incorrect",
        disabled: "answer answer1-disabled",
        symbol: <SquareIcon />,
        answerText: "For creating different styles",
      },
      {
        className: "answer answer2",
        id: "correct",
        disabled: "answer answer2-disabled",
        symbol: <PanoramaHorizontalSelectIcon />,
        answerText: "For creating different sections",
      },
      {
        className: "answer answer3",
        id: "incorrect",
        disabled: "answer answer3-disabled",
        symbol: <CircleIcon />,
        answerText: "For adding headings",
      },
      {
        className: "answer answer4",
        id: "incorrect",
        disabled: "answer answer4-disabled",
        symbol: <HexagonIcon />,
        answerText: "For adding titles",
      },
    ],
    [
      {
        className: "answer answer1",
        id: "correct",
        disabled: "answer answer1-disabled",
        symbol: <SquareIcon />,
        answerText: "<br>",
      },
      {
        className: "answer answer2",
        id: "incorrect",
        disabled: "answer answer2-disabled",
        symbol: <PanoramaHorizontalSelectIcon />,
        answerText: "<break></break>",
      },
      {
        className: "answer answer3",
        id: "incorrect",
        disabled: "answer answer3-disabled",
        symbol: <CircleIcon />,
        answerText: "</break>",
      },
      {
        className: "answer answer4",
        id: "incorrect",
        disabled: "answer answer4-disabled",
        symbol: <HexagonIcon />,
        answerText: "<div></div>",
      },
    ],
    [
      {
        className: "answer answer1",
        id: "correct",
        disabled: "answer answer1-disabled",
        symbol: <SquareIcon />,
        answerText: "<select>",
      },
      {
        className: "answer answer2",
        id: "incorrect",
        disabled: "answer answer2-disabled",
        symbol: <PanoramaHorizontalSelectIcon />,
        answerText: "<option>",
      },
      {
        className: "answer answer3",
        id: "incorrect",
        disabled: "answer answer3-disabled",
        symbol: <CircleIcon />,
        answerText: "<dropdown>",
      },
      {
        className: "answer answer4",
        id: "incorrect",
        disabled: "answer answer4-disabled",
        symbol: <HexagonIcon />,
        answerText: "<list>",
      },
    ],
    [
      {
        className: "answer answer1",
        id: "incorrect",
        disabled: "answer answer1-disabled",
        symbol: <SquareIcon />,
        answerText: "</DOCTYPE HTML>",
      },
      {
        className: "answer answer2",
        id: "incorrect",
        disabled: "answer answer2-disabled",
        symbol: <PanoramaHorizontalSelectIcon />,
        answerText: "</DOCTYPE>",
      },
      {
        className: "answer answer3",
        id: "correct",
        disabled: "answer answer3-disabled",
        symbol: <CircleIcon />,
        answerText: "<!DOCTYPE HTML>",
      },
      {
        className: "answer answer4",
        id: "incorrect",
        disabled: "answer answer4-disabled",
        symbol: <HexagonIcon />,
        answerText: "</DOCTYPE html>",
      },
    ]
  ],
};

const arrayAnswers = ["Hyper Text Markup Language", "<b>", "<ul></ul>", "6", "href", "<th></th>", 
"For creating different sections", "<br>", "<select>", "<!DOCTYPE HTML>"];

export {data, arrayAnswers};
