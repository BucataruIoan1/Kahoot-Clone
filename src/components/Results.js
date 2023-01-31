import React from 'react'

export const Results = (props) => {

  return (
    <div className='results-section'>
     <h1 className="kahoot-title">Kahoot!</h1>
     <h1 className='grade'>Your grade: <span className={props.score >= 5 ? "green-text" : "red-text"}>{props.score}</span></h1>
     <h2 className='feedback-quiz'>{props.score >=5 ? "Congratulations you have successfully pass the HTML quiz!" : "I'm sorry, you have not passed this quiz, more success next time!"}</h2>
      {props.score >= 5 ? <img src='https://media4.giphy.com/media/SKGo6OYe24EBG/200.webp?cid=ecf05e47d8f7cyxyrpx2aiftgnp0h0volt3bgooywg2xrgt1&rid=200.webp&ct=g' alt='success-quiz'/> : null}
    </div>
  )
}
