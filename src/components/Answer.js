export default function Answer(props) {

  let answer = "";


    return (
        <div onClick={(event) => {
          answer = event.target.querySelector("h2").innerHTML;
          setTimeout(() => {
            props.setUserAnswers((prevAnswer) => {
            return [...prevAnswer, answer];
          })
          }, 1000)
          
        }} className={props.className}>
        {props.symbol}
        <h2 className="asnwer-value">{props.answerText}</h2>
      </div>
    )
}
