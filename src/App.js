import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TabNavigation from "./components/TabNavigation";
import MissingNumberTab from "./components/MissingNumberTab";
import PasswordValidatorTab from "./components/PasswordValidatorTab";
import DogImagesTab from "./components/DogImagesTab";

function App() {
  const [activeTab, setActiveTab] = useState("missing-number");

  return (
    <div className="App">
      <div className="container">
        <Header />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="tab-content">
          {activeTab === "missing-number" ? (
            <MissingNumberTab />
          ) : activeTab === "password-validator" ? (
            <PasswordValidatorTab />
          ) : (
            <DogImagesTab />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
