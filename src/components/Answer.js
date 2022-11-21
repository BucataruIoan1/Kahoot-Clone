export default function Answer(props) {
    return (
        <div className={props.className}>
        {props.symbol}
        <h2>{props.answerText}</h2>
      </div>
    )
}