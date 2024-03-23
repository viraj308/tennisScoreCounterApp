import React from 'react';

function TeamScore({ teamName, score, deucePoint }) {
  return (
    <div className="team-score">
      <h2>{teamName}</h2>
      <p>Score: {score}</p>
      <p>Deduce Points: {deucePoint}</p>
    </div>
  );
}

export default TeamScore;
