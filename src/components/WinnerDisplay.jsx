import React from 'react';

function WinnerDisplay({ team1Score, team2Score, targetScore }) {
  let winner = null;
  if (team1Score >= targetScore) {
    winner = 'Team 1';
  } else if (team2Score >= targetScore) {
    winner = 'Team 2';
  }

  return winner ? <div className="winner-display">Winner: {winner}</div> : null;
}

export default WinnerDisplay;
