import React, { useState } from 'react';
import TeamScore from './components/TeamScore';
import ScoreButtons from './components/ScoreButtons';
import WinnerDisplay from './components/WinnerDisplay';
import ClearButton from './components/ClearButton';
import './App.css';

function App() {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [targetScore, setTargetScore] = useState(11); // Default target score

  const handleTargetScoreChange = (event) => {
    const newTargetScore = parseInt(event.target.value, 10);
    setTargetScore(newTargetScore);
  };

  const clearScores = () => {
    setTeam1Score(0);
    setTeam2Score(0);
  };


  return (
    <div className="app-container">
       <input
        type="number"
        value={targetScore}
        onChange={handleTargetScoreChange}
        placeholder="Enter target score"
      />
      <TeamScore teamName="Team 1" score={team1Score} />
      <TeamScore teamName="Team 2" score={team2Score} />
      <ScoreButtons
        team1Score={team1Score}
        team2Score={team2Score}
        setTeam1Score={setTeam1Score}
        setTeam2Score={setTeam2Score}
        targetScore={targetScore}
      />
      <WinnerDisplay
        team1Score={team1Score}
        team2Score={team2Score}
        targetScore={targetScore}
      />
      <ClearButton clearScores={clearScores} />
    </div>
  );
}

export default App;
