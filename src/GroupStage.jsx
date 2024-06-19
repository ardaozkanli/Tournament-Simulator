import React, { useState } from "react";
import flagsData from "./flags/country-flag.json";

function GroupStage() {
  const [countrys, setCountrys] = useState(flagsData);

  const chunkSize = 4;
  const groups = {};

  for (let i = 0; i < countrys.length; i += chunkSize) {
    const groupName = `Group ${String.fromCharCode(65 + i / chunkSize)}`; 
    groups[groupName] = countrys.slice(i, i + chunkSize);
  }

  console.log(groups); 
  return <div>Group Stage</div>;
}

export default GroupStage;
