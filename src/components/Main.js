import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';

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
          sx={{mb: "1rem"}}
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
            {props.isGameStart.isGamePinValide && props.isGameStart.isGameTrigger ? 
          <Alert sx={{width: "300px"}} severity="success">Succesfully connected to the Kahoot Game!</Alert>  : null}
          {!props.isGameStart.isGamePinValide && props.isGameStart.isGameTrigger ?
            <Alert sx={{width: "300px"}} className="pin-error" severity="error">Please introduce a PIN of 4 numbers!</Alert>  : null
          }
      </div>
      <p className="copyright-text">© Copyright Bucataru Ioan</p>
    </div>
  );
}

