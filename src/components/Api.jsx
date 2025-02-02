import React, { createContext, useState, useEffect } from "react";
import { createClient } from "pexels";

export const UserContext = createContext();

const ApiProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]); 
  const [error, setError] = useState(null); 
  const api_key = import.meta.env.VITE_PEXLES_API;  // Get API key from environment variables
  console.log(api_key);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const client = createClient(api_key);  // Use the API key correctly
        const response = await client.photos.curated({ per_page: 80 });
        setPhotos(response.photos);  // Update state with fetched photos
      } catch (err) {
        console.error("Error fetching photos:", err);
        setError(err.message);  // Handle error if fetch fails
      }
    };

    if (api_key) {
      fetchPhotos(); 
    } else {
      setError("API key is missing!");
    }
  }, [api_key]);

  return (
    <UserContext.Provider value={{ photos, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default ApiProvider;
