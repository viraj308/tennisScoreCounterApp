import React from "react";

function ScoreButtons({
  team1Score,
  team2Score,
  setTeam1Score,
  setTeam2Score,
  targetScore,
  deuce,
  setteam1ConsecutiveWins,
  setteam2ConsecutiveWins,
  team1ConsecutiveWins,
  team2ConsecutiveWins,
}) {
  const addPoint = (team) => {
    if (deuce && team === "team1") {
      setTeam1Score(team1Score);
    } else if (deuce && team === "team2") {
      setTeam2Score(team2Score);
    } else {
      if (team === "team1" && team1Score < targetScore) {
        setTeam1Score(team1Score + 1);
      } else if (team === "team2" && team2Score < targetScore) {
        setTeam2Score(team2Score + 1);
      }
    }
  };

  const deductPoint = (team) => {
    if (deuce) {
      if (team === "team1" && team1ConsecutiveWins > 0) {
        setteam1ConsecutiveWins(team1ConsecutiveWins - 1);
      }
      if (team === "team2" && team2ConsecutiveWins > 0) {
        setteam2ConsecutiveWins(team2ConsecutiveWins - 1);
      }
    } else {
      if (team === "team1" && team1Score > 0) {
        setTeam1Score(team1Score - 1);
      } else if (team === "team2" && team2Score > 0) {
        setTeam2Score(team2Score - 1);
      }
    }
  };

  return (
    <div className="score-buttons">
      <button className="add-button" onClick={() => addPoint("team1")}>
        +
      </button>
      <button className="deduct-button" onClick={() => deductPoint("team1")}>
        -
      </button>
      <button className="add-button" onClick={() => addPoint("team2")}>
        +
      </button>
      <button className="deduct-button" onClick={() => deductPoint("team2")}>
        -
      </button>
    </div>
  );
}

export default ScoreButtons;
