import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { isValidPassword } from "../utils/algorithms";
import CodeBlock from "./CodeBlock";
import ResultDisplay from "./ResultDisplay";

const PASSWORD_VALIDATOR_CODE = `function isValidPassword(password) {
  // At least 8 characters
  if (password.length < 8) return false;
  
  // At least 1 uppercase letter
  if (!/[A-Z]/.test(password)) return false;
  
  // At least 1 digit
  if (!/[0-9]/.test(password)) return false;
  
  // At least 1 special character
  if (!/[!@#$%^&*]/.test(password)) return false;
  
  return true;
}`;

function PasswordValidatorTab() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [result, setResult] = useState(null);
  const [resultType, setResultType] = useState("");
  const [requirements, setRequirements] = useState({
    hasLength: false,
    hasUppercase: false,
    hasDigit: false,
    hasSpecial: false,
  });

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword) {
      const validation = isValidPassword(newPassword);
      setRequirements(validation.requirements);
    } else {
      setRequirements({
        hasLength: false,
        hasUppercase: false,
        hasDigit: false,
        hasSpecial: false,
      });
    }
  };

  const handleValidatePassword = () => {
    if (!password) {
      setResult("Please enter a password");
      setResultType("error");
      return;
    }

    const validation = isValidPassword(password);

    if (validation.isValid) {
      setResult("Password is valid!");
      setResultType("success");
    } else {
      setResult("Password does not meet requirements");
      setResultType("error");
    }
  };

  const handleExampleClick = (example) => {
    setPassword(example);
    setTimeout(() => {
      handleValidatePassword();
      const validation = isValidPassword(example);
      setRequirements(validation.requirements);
    }, 0);
  };

  return (
    <div className="tab-pane" id="password-validator">
      <div className="description">
        <h2>Password Validator</h2>
        <p>This algorithm checks if a password meets security requirements.</p>
        <CodeBlock code={PASSWORD_VALIDATOR_CODE} />
      </div>

      <div className="interactive-section">
        <div className="input-group">
          <label htmlFor="password-input">Enter password:</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              id="password-input"
              placeholder="Enter a password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              id="toggle-password"
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <button id="validate-password" onClick={handleValidatePassword}>
            Validate Password
          </button>
        </div>

        <div className="requirements">
          <h3>Requirements</h3>
          <ul>
            <li
              id="req-length"
              style={{
                color: requirements.hasLength
                  ? "var(--success-color)"
                  : "var(--error-color)",
              }}
            >
              <FontAwesomeIcon
                icon={requirements.hasLength ? faCheck : faTimes}
              />{" "}
              At least 8 characters
            </li>
            <li
              id="req-uppercase"
              style={{
                color: requirements.hasUppercase
                  ? "var(--success-color)"
                  : "var(--error-color)",
              }}
            >
              <FontAwesomeIcon
                icon={requirements.hasUppercase ? faCheck : faTimes}
              />{" "}
              At least 1 uppercase letter
            </li>
            <li
              id="req-digit"
              style={{
                color: requirements.hasDigit
                  ? "var(--success-color)"
                  : "var(--error-color)",
              }}
            >
              <FontAwesomeIcon
                icon={requirements.hasDigit ? faCheck : faTimes}
              />{" "}
              At least 1 digit
            </li>
            <li
              id="req-special"
              style={{
                color: requirements.hasSpecial
                  ? "var(--success-color)"
                  : "var(--error-color)",
              }}
            >
              <FontAwesomeIcon
                icon={requirements.hasSpecial ? faCheck : faTimes}
              />{" "}
              At least 1 special character (!@#$%^&*)
            </li>
          </ul>
        </div>

        <ResultDisplay
          message={result}
          type={resultType}
          placeholder="Enter a password to see the result"
        />

        <div className="examples">
          <h3>Try Examples</h3>
          <button
            className="example-btn"
            onClick={() => handleExampleClick("Hello@123")}
          >
            Example 1: Hello@123
          </button>
          <button
            className="example-btn"
            onClick={() => handleExampleClick("hello123")}
          >
            Example 2: hello123
          </button>
          <button
            className="example-btn"
            onClick={() => handleExampleClick("HELLO@123")}
          >
            Example 3: HELLO@123
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordValidatorTab;
