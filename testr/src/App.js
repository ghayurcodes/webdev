import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="top-bar">
        <div className="brand">Catbook</div>
        <div className="top-fill" />
      </div>

      <main className="main-container">
        <ProfileCard
          name="YOUR NAME HERE"
          about="Extra Challenge: Modify catbook to show a personalized description here!"
          happiness={70}
          favorite="frog"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDQV50qS4Ejic6DN5I1y0OJKjhmTHX89d4A&s"
        />
      </main>
    </div>
  );
}

export default App;
