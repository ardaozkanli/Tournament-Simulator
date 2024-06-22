import React from "react";
import { useDrop } from "react-dnd";

const DroppableSlot = ({ index, slot, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "FLAG", // Sürüklenecek öğe türü
    drop: (item) => onDrop(item, index), // Bırakıldığında çağrılacak işlev
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="droppable-slot"
      style={{ backgroundColor: isOver ? "lightblue" : "white" }}>
      {slot ? (
        <div className="group-card-list">
          <img
            className="group-card-flag"
            src={slot.flag}
            alt={`${slot.country} flag`}
          />
          <span>{slot.country.toUpperCase().slice(0, 3)}</span>
        </div>
      ) : (
        index + 1
      )}
    </div>
  );
};

export default DroppableSlot;
