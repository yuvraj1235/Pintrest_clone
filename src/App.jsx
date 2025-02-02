import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PinterestCard from "./pages/Pintrestcard";
import { UserContext } from "./components/Api";
import PinterestLogin from "./pages/Login";
import { Auth0Provider } from '@auth0/auth0-react';
import ProtectecRouted from "./components/ProtectecRouted";


const App = () => {
  const { photos, error } = useContext(UserContext);

  if (error) return <p>Error loading photos.</p>;
  if (!photos || photos.length === 0) return <p>Loading...</p>;

  return (
    <>
 <Auth0Provider
    domain="dev-c7jxgd3j6umdceyu.us.auth0.com"
    clientId="VwkGw7b38gfcJq3tysMedbqaK0FFJ1GL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <Routes>
        <Route path="/" element={<PinterestLogin/>} />
        <Route element={<ProtectecRouted/>}>
            <Route path="/home" element={<Home/>} />
            <Route
                path="/picture/:id"
                element={<PinterestCard />}
              />

              
      </Route>
      </Routes>
      </Auth0Provider>
      
    </>
  );
};

export default App;
