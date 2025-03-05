import React from "react";

function ResultDisplay({ message, type, placeholder }) {
  return (
    <div className="result">
      <h3>Result</h3>
      <div className="result-box">
        {message ? (
          <span className={type}>{message}</span>
        ) : (
          <span className="placeholder">{placeholder}</span>
        )}
      </div>
    </div>
  );
}

export default ResultDisplay;
