import { createContext, useState, useEffect, ReactNode } from 'react';

interface CountdownContextData {
  day: number
  mounth: number
  year: number
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({children}: CountdownProviderProps) {

  const [day, setDay] = useState(0)
  const [mounth, setMounth] = useState(0)
  const [year, setYear] = useState(0)

  return (
    <CountdownContext.Provider value={{
      day,
      mounth,
      year
    }}>
      {children}
    </CountdownContext.Provider>
  )
}