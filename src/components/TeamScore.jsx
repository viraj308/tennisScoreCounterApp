import React from 'react';

function TeamScore({ teamName, score, deucePoint }) {
  return (
    <div className="team-score">
      <h2>{teamName}</h2>
      <p>Score Points: <span className='score'>{score}</span></p>
      <p>Deduce Points: <span className='deuce-score'>{deucePoint}</span></p>
    </div>
  );
}

export default TeamScore;
