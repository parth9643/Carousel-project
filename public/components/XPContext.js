// components/XPContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const XPContext = createContext();

export const XPProvider = ({ children }) => {
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const fetchXP = async () => {
      try {
        const response = await axios.get('https://mocki.io/v1/9859978d-3317-4920-aa81-f55c2045f6b6');
        setXP(response.data.account.xp);
      } catch (error) {
        console.error('Error fetching XP:', error);
      }
    };
    fetchXP();
  }, []);

  return <XPContext.Provider value={{ xp }}>{children}</XPContext.Provider>;
};

export default XPContext;
