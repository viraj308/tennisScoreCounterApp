import React from 'react';

function ScoreButtons({ team1Score, team2Score, setTeam1Score, setTeam2Score, targetScore }) {
  const addPoint = (team) => {
    if (team === 'team1' && team1Score < targetScore) {
      setTeam1Score(team1Score + 1);
    } else if (team === 'team2' && team2Score < targetScore) {
      setTeam2Score(team2Score + 1);
    }
  };

  const deductPoint = (team) => {
    if (team === 'team1' && team1Score > 0) {
      setTeam1Score(team1Score - 1);
    } else if (team === 'team2' && team2Score > 0) {
      setTeam2Score(team2Score - 1);
    }
  };

  return (
    <div className="score-buttons">
      <button onClick={() => addPoint('team1')} disabled={team1Score >= targetScore}>
        Add Point Team 1
      </button>
      <button onClick={() => deductPoint('team1')}>Deduct Point Team 1</button>
      <button onClick={() => addPoint('team2')} disabled={team2Score >= targetScore}>
        Add Point Team 2
      </button>
      <button onClick={() => deductPoint('team2')}>Deduct Point Team 2</button>
    </div>
  );
}

export default ScoreButtons;
