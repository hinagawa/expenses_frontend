import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    userData: null,
  });

  useEffect(() => {
    fetch('http://localhost:8000/api/user/user/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setState({ ...state, userData: data.user });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
