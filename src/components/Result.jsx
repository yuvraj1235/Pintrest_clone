import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "./components/Api";  // Assuming UserContext is correct
import { createClient } from "pexels";  // Assuming pexels client is available

const SearchPage = () => {
  const { photos, error } = useContext(UserContext); // Assuming photos are available in context
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(location.search).get("query"); // Get query parameter from URL
  const api_key = import.meta.env.VITE_PEXELS_API;  // Assuming the Pexels API key is stored in the .env

  useEffect(() => {
    if (query) {
      fetchImages(query);  // Fetch images based on the search term
    }
  }, [query]);

  const fetchImages = async (searchTerm) => {
    setLoading(true);
    try {
      // Initialize the Pexels client with your API key
      const client = createClient(api_key);

      // Use the Pexels API to fetch curated photos
      const response = await client.photos.search({ query: searchTerm, per_page: 80 });

      // Process the response data (make sure it's an array of photos)
      const data = response.photos;

      console.log(data);  // Inspect the response to check the structure

      // Filter images where the alt text (or any relevant field) matches the search term (case-insensitive)
      const filteredImages = data.filter((image) =>
        image.alt_description?.toLowerCase().includes(searchTerm.toLowerCase()) || // Check alt_description
        image.photographer.toLowerCase().includes(searchTerm.toLowerCase())  // Optionally search by photographer
      );

      // Set the search results
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
                    alt={image.alt_description || "Image"}  // Default alt text if not available
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
