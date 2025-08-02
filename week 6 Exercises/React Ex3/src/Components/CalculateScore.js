import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const score = (total / goal).toFixed(2);

  return (
    <div className="score-container">
      <h1 className="heading">Student Details:</h1>
      <p><strong className="label name-label">Name:</strong> <span className="value name-value">{name}</span></p>
      <p><strong className="label school-label">School:</strong> <span className="value school-value">{school}</span></p>
      <p><strong className="label total-label">Total:</strong> <span className="value total-value">{total}Marks</span></p>
      <p><strong className="label score-label">Score:</strong> <span className="value score-value">{score}%</span></p>
    </div>
  );
}

export default CalculateScore;

