import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/Api";
import Header from "../components/header"; 
import PinCard from "../components/pincard";
import axios from "axios";

const PinterestCard = () => {
  const { photos, error } = useContext(UserContext); 
  const { id } = useParams(); 

  // Find the photo by id
  const photo = photos.find((photo) => photo.id.toString() === id);

  // If no photo is found, show an error message
  if (!photo) {
    return (
      <div>
        <Header />
        <h2>Photo not found</h2>
      </div>
    );
  }

  const downloadImage = async () => {
    try {
      const response = await axios.get(photo.src.large, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      const fileName = `${photo.photographer}-${photo.id}.jpg`; // Use photographer name or ID for the filename
      link.href = url;
      link.setAttribute("download", fileName); // Set file name
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="w-full h-full">
      <Header />       
      <div className="w-auto h-auto m-10 ml-20 rounded-4xl overflow-hidden shadow-lg flex justify-center items-center">
        <div className="relative rounded-4xl">
          <img src={photo.src.large} alt={photo.photographer} className="w-full h-auto rounded-4xl object-cover" />
          <button onClick={downloadImage} className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-md hover:bg-red-600 transition">
            Save
          </button>
        </div>
      </div>

      <PinCard Pins={photos} />
    </div>
  );
};

export default PinterestCard;
