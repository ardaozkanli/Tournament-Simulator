import React, { useState } from "react";
import flagsData from "./flags/country-flag.json";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GroupCard from "./components/GroupCard";

function GroupStage() {
  const [countries, setCountries] = useState(flagsData);

  const chunkSize = 4;
  const groups = [];

  for (let i = 0; i < countries.length; i += chunkSize) {
    const groupName = `Group ${String.fromCharCode(65 + i / chunkSize)}`;
    groups.push({
      name: groupName,
      countries: countries.slice(i, i + chunkSize),
    });
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <h1>GROUP STAGE</h1>
        <hr />
        <div className="group-container">
          {groups.map((group, index) => (
            <GroupCard
              key={index}
              groupName={group.name}
              countries={group.countries}
            />
          ))}
        </div>
      </>
    </DndProvider>
  );
}

export default GroupStage;
