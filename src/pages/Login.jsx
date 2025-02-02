import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function PinterestLogin() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
  
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect({
        redirectUri: window.location.origin 
      });
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  useEffect(() => {
   
    if (isAuthenticated && !isLoading && location.pathname !== "/home") {
      navigate("/home");
    }
  }, [isAuthenticated, isLoading, navigate, location.pathname]);

 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return null; 
}
