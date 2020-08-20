import React from "react";
import NavBar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import UserProvider from './contexts/UserContext';

function App() {  
  
  return (
    <UserProvider>
      <NavBar />
      <Header />
      <Main />
    </UserProvider>
  );
}

export default App;
