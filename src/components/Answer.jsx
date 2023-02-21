export default function Answer({ text, selectAnswer, isSelected, isCorrect, isEndGame }) {

    var output = "answer";
    if (isEndGame) {
        output += " answer-end-game";
        output += isSelected ? " selected" : "";
        output += isCorrect ? " correct" : " wrong";

    } else {
        output += " answer-in-game";
        output += isSelected ? " selected" : "";
    }

    return (
        <div className={output} onClick={isEndGame ? ()=>{} : selectAnswer}>
            <p>{text}</p>
        </div>
    );
}