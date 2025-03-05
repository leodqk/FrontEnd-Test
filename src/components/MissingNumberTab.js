import React, { useState } from "react";
import { findMissingNumber } from "../utils/algorithms";
import CodeBlock from "./CodeBlock";
import ResultDisplay from "./ResultDisplay";

const MISSING_NUMBER_CODE = `function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}`;

function MissingNumberTab() {
  const [inputArray, setInputArray] = useState("");
  const [result, setResult] = useState(null);
  const [resultType, setResultType] = useState("");
  const [visualArray, setVisualArray] = useState([]);
  const [missingNumber, setMissingNumber] = useState(null);

  const handleFindMissing = () => {
    if (!inputArray.trim()) {
      setResult("Please enter an array");
      setResultType("error");
      return;
    }

    try {
      // Parse input value to array of numbers
      const arr = inputArray.split(",").map((num) => {
        const parsed = parseInt(num.trim());
        if (isNaN(parsed)) throw new Error("Invalid input");
        return parsed;
      });

      // Check if array is valid
      if (arr.length < 2) {
        setResult("Array should have at least 2 numbers");
        setResultType("error");
        return;
      }

      // Find missing number
      const missing = findMissingNumber(arr);

      // Update state for visualization
      setVisualArray(arr);
      setMissingNumber(missing);

      // Show result
      setResult(`Missing number: ${missing}`);
      setResultType("success");
    } catch (error) {
      setResult("Invalid input. Please enter comma-separated numbers.");
      setResultType("error");
    }
  };

  const handleExampleClick = (example) => {
    setInputArray(example);
    setTimeout(() => {
      handleFindMissing();
    }, 0);
  };

  return (
    <div className="tab-pane active" id="missing-number">
      <div className="description">
        <h2>Find Missing Number</h2>
        <p>
          This algorithm finds the missing number in a consecutive sequence
          starting from 1.
        </p>
        <CodeBlock code={MISSING_NUMBER_CODE} />
      </div>

      <div className="interactive-section">
        <div className="input-group">
          <label htmlFor="array-input">Enter array (comma separated):</label>
          <input
            type="text"
            id="array-input"
            placeholder="e.g., 1,2,3,5"
            value={inputArray}
            onChange={(e) => setInputArray(e.target.value)}
          />
          <button id="find-missing" onClick={handleFindMissing}>
            Find Missing Number
          </button>
        </div>

        <div className="visualization">
          <h3>Visualization</h3>
          <div className="array-visual">
            {visualArray.map((num, index) => (
              <div key={index} className="array-item">
                {num}
              </div>
            ))}
          </div>
          <div className="missing-visual">
            {missingNumber !== null && (
              <div className="missing-number">{missingNumber}</div>
            )}
          </div>
        </div>

        <ResultDisplay
          message={result}
          type={resultType}
          placeholder="Enter an array to see the result"
        />

        <div className="examples">
          <h3>Try Examples</h3>
          <button
            className="example-btn"
            onClick={() => handleExampleClick("1,2,3,5")}
          >
            Example 1: [1,2,3,5]
          </button>
          <button
            className="example-btn"
            onClick={() => handleExampleClick("10,11,12,14")}
          >
            Example 2: [10,11,12,14]
          </button>
        </div>
      </div>
    </div>
  );
}

export default MissingNumberTab;
