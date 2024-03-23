import React from 'react';

function WinnerDisplay({ team1Score, team2Score, targetScore, deuce, team1ConsecutiveWins, team2ConsecutiveWins }) {
  let winner = null;

  if (deuce) {
    winner = 'Deuce';
    if(team1ConsecutiveWins === 2) {
      winner = "team 1 won by deuce"
    }
    if(team2ConsecutiveWins === 2) {
      winner = "team 2 won by deuce"
    }
  } else if (team1Score >= targetScore && !deuce) {
    winner = 'Winner: Team 1';
  } else if (team2Score >= targetScore && !deuce) {
    winner = 'Winner: Team 2';
  }

  return winner ? <div className="winner-display">{winner}</div> : null;
}

export default WinnerDisplay;

/* if (team1Score >= targetScore && !deuce) {
  winner = 'Team 1';
} else if (team2Score >= targetScore && !deuce) {
  winner = 'Team 2';
} else if (deuce) {
  winner = 'Deuce';
} */