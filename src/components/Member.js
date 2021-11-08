import React from "react";
import "../style/style.css";

export default function Member({ member }) {
  return (
    <div className="card">
      <div className="card__title">{member.officialName}</div>
      <div className="card__body">
        <br />
        <p>State: {member.congresses[0].stateCode}</p>
        <p>District: {member.congresses[0].stateDistrict}</p>
        <p>Party: {member.congresses[0].partyAffiliations[0].name}</p>
        <p>Active: {member.active}</p>
      </div>
    </div>
  );
}
