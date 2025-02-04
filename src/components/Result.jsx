import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "./components/Api";  
import { createClient } from "pexels";  
const SearchPage = () => {
  const { photos, error } = useContext(UserContext);
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(location.search).get("query"); 
  const api_key = import.meta.env.VITE_PEXELS_API;  
  useEffect(() => {
    if (query) {
      fetchImages(query);  
    }
  }, [query]);

  const fetchImages = async (searchTerm) => {
    setLoading(true);
    try {
   
      const client = createClient(api_key);

      
      const response = await client.photos.search({ query: searchTerm, per_page: 80 });

     
      const data = response.photos;

      console.log(data);  

      
      const filteredImages = data.filter((image) =>
        image.alt_description?.toLowerCase().includes(searchTerm.toLowerCase()) || 
        image.photographer.toLowerCase().includes(searchTerm.toLowerCase())  
      );

     
      setSearchResults(filteredImages);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <h1>Search Results for "{query}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="image-gallery">
          {searchResults.length > 0 ? (
            searchResults.map((image) => (
              <div key={image.id} className="image-item">
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image.src.medium}
                    alt={image.alt_description || "Image"}  
                    className="image-thumbnail"
                  />
                </a>
                <p>{image.photographer}</p>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
