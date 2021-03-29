import React, { createContext, useEffect, useState } from 'react';
import { UserService } from 'services/user.service';

const initialState = { items: [], user: null };
const jsonItems = [{}]; //crear aquí items de prueba para validar el hooks

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [allItems, setAllItems] = useState(initialState.items);
    const [user, setUser] = useState(initialState.user);
    const contextValue = { data: { allItems, user }, mutations: { setAllItems } };

    useEffect(() => {
        (async () => {
          console.count('async UserService.getData');
          const data = await UserService.getData();
          setUser({fullName: data.name, points: data.points});
        })()
    }, []);

    useEffect(()=> {
        if (user) {
            setUser(user);
        }
    }, [user]);

    useEffect(() => {
        setAllItems(jsonItems);
    }, [allItems]);

    return (
        <StoreContext.Provider value={contextValue}>
            { children }
        </StoreContext.Provider>
    );
};
