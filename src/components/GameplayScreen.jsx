import Question from './Question';

export default function GameplayScreen({ questions, setQuestions, restart, gameEnded, setGameEnded, gameplays, isLoading }) {
    const correctAnswers = questions.filter(question => question.correct_answer === question.selected); 

    const questionElements = questions.map((question, index) => {
        return <Question key={index} question={question} setQuestions={setQuestions} isEndGame={gameEnded} gameplays={gameplays}/>
    });

    return !isLoading ?
    <div className="gameplay">
        <div className="questions">
            {questionElements}
        </div>
        <div className="gameplay-footer">
            {
                gameEnded && <p className="gameplay-footer-results">You scored {correctAnswers.length}/{questionElements.length} correct answers</p>
            }
            <button className="gameplay-footer-button" onClick={gameEnded ? restart : () => setGameEnded(true)}>{gameEnded ? "Play again" : "Validate"}</button>
        </div>
    </div>
    :
    <div className="loading">
        <h1>Loading...</h1>
    </div>
}