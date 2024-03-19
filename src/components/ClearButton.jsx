import React from 'react';

function ClearButton({ clearScores }) {
  return (
    <div className="clear-button">
      <button onClick={clearScores}>Clear Scores</button>
    </div>
  );
}

export default ClearButton;
