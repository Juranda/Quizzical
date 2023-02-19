import NewGameScreen from "./components/NewGameScreen";
import Blob1 from "./assets/blob1.svg";
import Blob2 from "./assets/blob2.svg";
import { useState } from "react";
import GameplayScreen from "./components/GameplayScreen";


function App() {

  const [gameScreen, setGameScreen] = useState(false);

  return (
    <div className="Quizzical">
      <img src={Blob1} />
      <img src={Blob2} />
      {
        !gameScreen ? <NewGameScreen startGame={setGameScreen} /> :
          <GameplayScreen />
      }
    </div>
  );
}

export default App
