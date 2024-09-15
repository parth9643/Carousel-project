// components/ChaptersContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ChaptersContext = createContext();

export const ChaptersProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://mocki.io/v1/84c8c12a-4ee4-472b-b51f-a020823b2925');
        // console.log('Fetched books:', response.data);
        setBooks(response.data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <ChaptersContext.Provider value={{ books, loading }}>
      {children}
    </ChaptersContext.Provider>
  );
};

export default ChaptersContext;
