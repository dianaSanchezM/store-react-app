import React, { useState, useEffect } from "react";
import NavBar from './components/Navbar';

function App() {
  const [user, setUser] = useState({});

  useEffect(()=>{
    getUserData();
    postData('user/points', {amount: 1000});
  },[]);
  const getUserData = () => {
    const url = `https://coding-challenge-api.aerolab.co/user/me`;
      return (fetch(url, {
        method: 'GET', 
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM1NDJmYTc1MTI2YzAwNmQwOGJiMDYiLCJpYXQiOjE1OTczMjYwNzR9.31SDbCf2qkqMAB0ZENf7K8Z87jmNyK11_ODaHVYTl2c'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => setUser(response)));
      
  };

  const postData = (path, data) => {
    fetch(`https://coding-challenge-api.aerolab.co/${path}`, {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM1NDJmYTc1MTI2YzAwNmQwOGJiMDYiLCJpYXQiOjE1OTczMjYwNzR9.31SDbCf2qkqMAB0ZENf7K8Z87jmNyK11_ODaHVYTl2c'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  
  return (
    <NavBar {...user}/>
  );
}

export default App;
