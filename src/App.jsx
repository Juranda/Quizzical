import NewGameScreen from "./components/NewGameScreen";
import GameplayScreen from "./components/GameplayScreen";
import Blob1 from "./assets/blob1.svg";
import Blob2 from "./assets/blob2.svg";
import { useState, useEffect } from "react";

function App() {
  const [gameScreen, setGameScreen] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [gameplays, setGameplays] = useState(0);
  const [loading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  // {
  //     category: "",
  //     correct_answer: "",
  //     difficulty: "",
  //     incorrect_answers: [""],
  //     question: "",
  //     type: ""
  // }

  function restart() {
    setGameEnded(false);
    setGameplays(prev => prev + 1);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(json => {
        setQuestions(json.results.map(question => ({ ...question, selected: "", answers: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5) })));
        setIsLoading(false);
      });
  }, [gameplays]);

  return (
    <div className="Quizzical">
      <img src={Blob1} />
      <img src={Blob2} />
      <div className="main-screen">
        {
          !gameScreen ? 
            <NewGameScreen startGame={setGameScreen} /> :
            <GameplayScreen
              questions={questions}
              setQuestions={setQuestions}
              restart={restart}
              gameEnded={gameEnded}
              setGameEnded={setGameEnded}
              gameplays={gameplays}
              isLoading={loading}
            />
        }
      
      </div>
    </div>
  );
}

export default App
