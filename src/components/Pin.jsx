import React from "react";

const Pin = ({ imgSrc, name, link ,id }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-md bg-white w-full hover:scale-110 ">
     
      <img
        src={imgSrc}
        alt={name}
        className="w-full h-auto object-cover" 
      />
      
      {name && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </div>
      )}
     
      {link && (
        <a
        href={`/picture/${id}`}
          rel="noopener noreferrer"
          aria-label={`View more about ${name}`}
          className="absolute inset-0"
        />
      )}
    </div>
  );
};

export default Pin;
