// components/RSSEContext.tsx
import { createContext, useContext } from 'react';

type RSSEContextType = {
  logo: string;
  schedule1: string[];
  schedule2: string[];
};

const RSSEContext = createContext<RSSEContextType>({
  logo: '',
  schedule1: [],
  schedule2: [],
});

export const useRSSEContext = () => useContext(RSSEContext);

type RSSEProviderProps = {
    children: React.ReactNode;
  };


export const RSSEProvider: React.FC<RSSEProviderProps> = ({ children }) => {
  const logo = 'G:\Repos\RSSE-Website\RSSE_Outline_Endro_Racing';
  const schedule1 = ['Event 1', 'Event 2', 'Event 3'];
  const schedule2 = ['Event A', 'Event B', 'Event C'];

  return (
    <RSSEContext.Provider value={{ logo, schedule1, schedule2 }}>{children}</RSSEContext.Provider>
  );
};
