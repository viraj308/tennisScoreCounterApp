import React from 'react';

function TeamScore({ teamName, score }) {
  return (
    <div className="team-score">
      <h2>{teamName}</h2>
      <p>Score: {score}</p>
    </div>
  );
}

export default TeamScore;
