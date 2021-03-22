import React, { createContext, useEffect, useRef, useState } from 'react';

const initialState = { items: [] };
const jsonItems = [{}]; //crear aquí items de prueba para validar el hooks

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [allItems, setAllItems] = useState(initialState.items);
    const user = { fullName: 'Daniel Torres', country: 'Colombia' };
    const contextValue = { data: { allItems, user },
                           mutations: { setAllItems } 
                         };
    useEffect(() => {
        console.count("Solo mostrare este mensaje una vez");
        setAllItems(jsonItems);
    }, [allItems]);

    useEffect(() => {
        console.count(
          "Este efecto corre siempre que haya un cambio en toda la aplicación"
        );
    });

    return (
        <StoreContext.Provider value={contextValue}>
            { children }
        </StoreContext.Provider>
    );
};
