import React, { useState } from 'react';
import TeamScore from './components/TeamScore';
import ScoreButtons from './components/ScoreButtons';
import WinnerDisplay from './components/WinnerDisplay';
import ClearButton from './components/ClearButton';
import './App.css';

import sound from "../src/assets/sounds/fortnite-dance.wav"
import buttonSound from "../src/assets/sounds/button-click.wav"
import animeWow from "../src/assets/sounds/anime-wow-sound.wav"
import johnCena from "../src/assets/sounds/john-cena-chinese.wav"
import jojoSound from "../src/assets/sounds/jojos-golden.mp3"

function App() {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [targetScore, setTargetScore] = useState(11); // Default target score
  const [deuce, setDeuce] = useState(false);
  const [team1ConsecutiveWins, setTeam1ConsecutiveWins] = useState(0);
  const [team2ConsecutiveWins, setTeam2ConsecutiveWins] = useState(0);
  

  const handleTargetScoreChange = (event) => {
    const newTargetScore = parseInt(event.target.value, 10);
    setTargetScore(newTargetScore);
  };

  const clearScores = () => {
    setTeam1Score(0);
    setTeam2Score(0);
    setDeuce(false);
    setTeam1ConsecutiveWins(0);
    setTeam2ConsecutiveWins(0);
    
  };

  const play = () => {
   /*  const sounds = [sound, animeWow, johnCena, jojoSound]
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const soundToPlay = sounds[randomIndex]; */
    new Audio(sound).play()
  }
  const playButton = () => {
    new Audio(buttonSound).play()
  }

  const handleScoreChange = (team, score) => {
    playButton()
    if (team === 'team1') {
      setTeam1Score(score);
    } else if (team === 'team2') {
      setTeam2Score(score);
    }
     // Check for deuce
     if (team === 'team1' && team2Score === targetScore - 1 && score === targetScore - 1) {
      setDeuce(true);
    } else if (team === 'team2' && team1Score === targetScore - 1 && score === targetScore - 1) {
      setDeuce(true);
    } else {
      setDeuce(false);
    }

    if (deuce) {
      if (team === 'team1') {
        setTeam1ConsecutiveWins((prevWins) => prevWins + 1);
        setTeam2ConsecutiveWins(0); // Reset consecutive wins for the other team
      } else if (team === 'team2') {
        setTeam2ConsecutiveWins((prevWins) => prevWins + 1);
        setTeam1ConsecutiveWins(0); // Reset consecutive wins for the other team
      }
    
   }

   // Reset consecutive wins if not in deuce
   if (!deuce) {
    setTeam1ConsecutiveWins(0);
    setTeam2ConsecutiveWins(0);
  }
  // Check for two consecutive points to win
  /* if (deuce) {
    // Handle the scenario outside of deuce
    if(team1ConsecutiveWins === 2) {
      alert("team1 won by deuce")
    }
    if(team2ConsecutiveWins === 2) {
      alert("team2 won by deuce")
    }
    
  } */
}


  return (
    <div className="app-container">
      <h1 className='app-heading'>Ping Pong Score Tracker</h1>
       <input
        type="number"
        value={targetScore}
        onChange={handleTargetScoreChange}
        placeholder="Enter target score"
      />
      <div className='team-score-container'>
      <TeamScore teamName="Team 1" score={team1Score} deucePoint={team1ConsecutiveWins}/>
      <TeamScore teamName="Team 2" score={team2Score} deucePoint={team2ConsecutiveWins}/>
      </div>
      <ScoreButtons
        team1Score={team1Score}
        team2Score={team2Score}
        setTeam1Score={(score) => handleScoreChange('team1', score)}
        setTeam2Score={(score) => handleScoreChange('team2', score)}
        targetScore={targetScore}
        deuce={deuce}
        setteam1ConsecutiveWins={setTeam1ConsecutiveWins}
        setteam2ConsecutiveWins={setTeam2ConsecutiveWins}
        team1ConsecutiveWins={team1ConsecutiveWins}
        team2ConsecutiveWins={team2ConsecutiveWins}
      />
      <WinnerDisplay
        team1Score={team1Score}
        team2Score={team2Score}
        targetScore={targetScore}
        deuce={deuce}
        team1ConsecutiveWins={team1ConsecutiveWins}
        team2ConsecutiveWins={team2ConsecutiveWins}
        play={play}
      />
      <ClearButton clearScores={clearScores} />
    </div>
  );
}

export default App;
