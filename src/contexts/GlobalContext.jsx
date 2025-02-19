import { createContext, useContext, useState } from "react";
import trips from '../data/trips'

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [trip, setTrips] = useState(trips);

    const value = {
        trip
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(GlobalContext)
};

export { useGlobalContext, GlobalProvider }