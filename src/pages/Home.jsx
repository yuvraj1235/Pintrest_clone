import React, { useContext } from "react";
import PinCard from "../components/Pincard";
import { UserContext } from "../components/Api"; 
import Header from "../components/Header";

const Home = () => {
  const { photos, error } = useContext(UserContext);

  if (error) return <p>Error: {error}</p>; 
  if (!photos) return <p>Loading...</p>; 

  return (
    <div>
      <Header/>
      <PinCard Pins={photos} /> 
    </div>
  );
};

export default Home;
