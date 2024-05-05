// App.js
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";
import LoginForm from "./Components/Login/Login";

function App() {
  // State to manage authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <div>
        {isLoggedIn && <Navbar />}
        {isLoggedIn ? (
          <Admin />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
