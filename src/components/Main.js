import Button from "@mui/material/Button";

export default function Main(props) {

    let inputGameValue;

  return (
    <div className="main-page">
      <h1 className="kahoot-title">Kahoot!</h1>
      <div className="main-center">
        <input onChange={(event) => inputGameValue = event.target.value} type="tex" id="game-pin" placeholder="Game PIN" />
        <Button
          variant="contained"
          size="large"
          onClick={() => props.checkGamePIN(inputGameValue)}
          style={{
            backgroundColor: "#333333",
            fontFamily: "Montserrat",
            fontWeight: "800",
            minHeight: "48px",
          }}
        >
          Enter
        </Button>
      </div>
      <p className="copyright-text">© Copyright Bucataru Ioan</p>
    </div>
  );
}
