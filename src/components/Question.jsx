import { cleanText } from "../helpers";
import Answer from "./Answer";

export default function Question({ question, setQuestions, isEndGame, gameplays }) {
    const answerElements = question.answers.map((answer, index) => {
        return <Answer
            key={index}
            text={cleanText(answer)}
            selectAnswer={() => setAnswers(question, answer)}
            isSelected={answer === question.selected}
            isCorrect={answer === question.correct_answer}
            isEndGame={isEndGame}
        />
    });

    function setAnswers(questionToChange, answer) {
        setQuestions(prevQuestions => {
            
            //Achar a question antiga pra mudar
            const oldQuestion = prevQuestions.find(question => question == questionToChange);

            //Mudar o "selected" para o parâmetro "answer"
            const newQuestion = {
                ...oldQuestion,
                selected: answer === oldQuestion.selected ? "" : answer
            }

            //Criar uma nova [] de questions com os elementos antigos
            const newQuestions = [...prevQuestions];

            //Achar o index da quest antiga
            const oldIndex = prevQuestions.indexOf(oldQuestion);
            
            //Subistituir a question antiga pela nova modificada
            newQuestions.splice(oldIndex, 1, newQuestion);
            return newQuestions;
        })
    }

    return (
        <div className="question">
            <h3>{cleanText(question.question)}</h3>
            <div className="answers">
                { answerElements }
            </div>
        </div>
    );
}