import { useState } from 'react';
import { DialContext } from './DialContext';

const DialProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const data = {
    interactions,
    setInteractions,
  };

  return <DialContext.Provider value={data}>{children}</DialContext.Provider>;
};

export default DialProvider;
