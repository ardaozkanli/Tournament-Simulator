import React from "react";
import { useDrag } from "react-dnd";

const DraggableSlot = ({ slot, index }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "SLOT",
    item: { slot, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="group-card-list"
      style={{ opacity: isDragging ? 0.5 : 1 }}>
      <img
        className="group-card-flag"
        src={slot.flag}
        alt={`${slot.country} flag`}
      />
      <span>{slot.country.toUpperCase().slice(0, 3)}</span>
    </div>
  );
};

export default DraggableSlot;
