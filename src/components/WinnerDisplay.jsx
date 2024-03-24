import React from 'react';

function WinnerDisplay({ team1Score, team2Score, targetScore, deuce, team1ConsecutiveWins, team2ConsecutiveWins, play }) {
  let winner = null;

  if (deuce) {
    winner = 'Deuce';
    if(team1ConsecutiveWins === 2) {
      winner = "Team 1 won by deuce"
      play();

    }
    if(team2ConsecutiveWins === 2) {
      winner = "Team 2 won by deuce"
      play();
    }
  } else if (team1Score >= targetScore && !deuce) {
    winner = 'Winner: Team 1';
    play();
  } else if (team2Score >= targetScore && !deuce) {
    winner = 'Winner: Team 2';
    play();
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