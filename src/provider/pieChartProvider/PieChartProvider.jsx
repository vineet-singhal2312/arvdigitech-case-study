import { useState } from "react";
import { createContext, useContext } from "react";

export const PieChartContext = createContext();

export const PieChartProvider = ({ children }) => {
  const [state, setState] = useState({
    travelValue: 25,
    foodValue: 30,
    moviesValue: 60,
    hotelValue: 10,
  });

  return (
    <PieChartContext.Provider value={{ state, setState }}>
      {children}
    </PieChartContext.Provider>
  );
};

export function usePieChart() {
  return useContext(PieChartContext);
}
