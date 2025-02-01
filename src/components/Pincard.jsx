import React from "react";
import Pin from "./Pin";

const PinCard = ({ Pins }) => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 p-4"
      style={{
        gridAutoRows: "10px",
      }}
    >
      {Pins.map((pin) => (
        <div
          key={pin.id}
          style={{
            gridRowEnd: `span ${Math.ceil((pin.height / pin.width) * 11)} `, 
                    }}     
        >
          <Pin
            imgSrc={pin.src.large2x}
            name={pin.alt}
            link={pin.url}
            id={pin.id}
          />
        </div>
      ))}
    </div>
  );
};

export default PinCard;
