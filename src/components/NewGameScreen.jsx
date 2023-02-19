export default function NewGameScreen({startGame}) {
    return (
        <div className="new-game">
            <div className="new-game-title">
                <h1>Quizzical</h1>
                <p>Você consegue acertar todas as perguntas?</p>
            </div>
            <div className="new-game-start">
                <button onClick={() => startGame(true)}>Começar</button>
            </div>
        </div>
    );
}