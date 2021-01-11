import React, { useState, useEffect } from 'react';
import StoreContext from './StoreContext';

const initialState = { items: [] };
const jsonItems = [{}]; //crear aquí items de prueba para validar el hooks

export default function StoreProvider({ children }) {
    const [allItems, setAllItems] = useState(initialState.items);
    
    const contextValue = { data: { allItems },
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
