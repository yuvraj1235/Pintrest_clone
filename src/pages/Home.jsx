import React, { useContext } from "react";
import PinCard from "../components/pincard";
import Header from "../components/header";
import { UserContext } from "../components/Api"; 

const Home = () => {
  const { photos, error } = useContext(UserContext);

  if (error) return <p>Error: {error}</p>; 
  if (!photos) return <p>Loading...</p>; 

  return (
    <div>
      <Header />
      <PinCard Pins={photos} /> 
    </div>
  );
};

export default Home;
