import React from "react";

function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        className={`tab-btn ${activeTab === "missing-number" ? "active" : ""}`}
        onClick={() => setActiveTab("missing-number")}
      >
        Find Missing Number
      </button>
      <button
        className={`tab-btn ${
          activeTab === "password-validator" ? "active" : ""
        }`}
        onClick={() => setActiveTab("password-validator")}
      >
        Password Validator
      </button>
      <button
        className={`tab-btn ${activeTab === "dog-images" ? "active" : ""}`}
        onClick={() => setActiveTab("dog-images")}
      >
        Dog Images
      </button>
    </div>
  );
}

export default TabNavigation;
