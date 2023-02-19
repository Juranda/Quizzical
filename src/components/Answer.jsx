export default function Answer({question, text}) {
    return (
        <label className="answer" htmlFor={question}>
            <p>{text}</p>
            <input style={{cursor: 'pointer'}} type="radio" name={question} />
        </label>
    );
}