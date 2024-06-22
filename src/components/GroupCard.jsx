import React, { useState } from "react";
import DraggableSlot from "../utils/DraggableSlot";
import DroppableSlot from "../utils/DroppableSlot";
import "../styles/group_card.css";

function GroupCard({ groupName, countries }) {
  const [slots, setSlots] = useState(Array(4).fill(null));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (country) => {
    if (currentIndex < slots.length) {
      const newSlots = [...slots];
      newSlots[currentIndex] = country;
      setSlots(newSlots);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDrop = (item, index) => {
    const newSlots = [...slots];
    const draggedItemIndex = item.index;

    // Swap the items
    [newSlots[index], newSlots[draggedItemIndex]] = [
      newSlots[draggedItemIndex],
      newSlots[index],
    ];

    setSlots(newSlots);
  };
  console.log(slots);
  return (
    <div className="group-card">
      <div className="group-card-title">
        <h2>{groupName}</h2>
      </div>
      <div className="group-card-flags">
        <ul>
          {countries.map((country, index) => (
            <li
              key={index}
              className="group-card-list"
              onClick={() => handleClick(country)}>
              <img
                className="group-card-flag"
                src={country.flag}
                alt={`${country.country} flag`}
              />
              <span>{country.country.toUpperCase().slice(0, 3)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="group-card-slots">
        {slots.map((slot, index) => (
          <DroppableSlot
            key={index}
            index={index}
            slot={slot}
            onDrop={handleDrop}>
            {slot && <DraggableSlot slot={slot} index={index} />}
          </DroppableSlot>
        ))}
      </div>
    </div>
  );
}

export default GroupCard;
