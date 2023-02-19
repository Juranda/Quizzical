import Answer from "./Answer";

export default function Question({ question, answers, correctAnswer }) {

    const answersElements = answers.map(answer => {
        return <Answer text={answer} question={question}/>
    });

    return (
        <div className="question">
            <h1>{question}</h1>
            <div className="answers">
                {answersElements}
            </div>
        </div>
    );
}