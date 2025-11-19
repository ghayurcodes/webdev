import React from "react";

export default function ProfileCard({ name, about, happiness, favorite, imgSrc }) {
  return (
    <div className="card">
      <div className="avatar-wrap">
        <div className="avatar">
          <img src={imgSrc} alt="profile" />
        </div>
      </div>

      <h1 className="name">{name}</h1>
      <hr className="divider" />

      <div className="info-row">
        <div className="info-col">
          <h3>About Me</h3>
          <p className="muted small">{about}</p>
        </div>

        <div className="info-col center">
          <h3>Cat Happiness</h3>
          <div className="happiness">{happiness}</div>
        </div>

        <div className="info-col right">
          <h3>My Favorite Type of Cat</h3>
          <p className="muted small">{favorite}</p>
        </div>
      </div>
    </div>
  );
}
