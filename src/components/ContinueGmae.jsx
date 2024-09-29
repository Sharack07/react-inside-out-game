export default function ContinueGame({ onContinue }) {
  return (
    <div className="overlay">
      <div className="message-box">
        {/*game-over*/}
        <h1>Seguir jugando</h1>
        <button className="continueGameBtn" onClick={onContinue}>
            Continuar
        </button>
      </div>
    </div>
  );
}
