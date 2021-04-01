import React, { createContext, useEffect, useState } from 'react';
import { UserService } from 'services/user.service';

const initialState = { items: [], user: {fullName: '?', points: 0}, amount: { points: null} };
const jsonItems = [{}]; //crear aquí items de prueba para validar el hooks

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [allItems, setAllItems] = useState(initialState.items);
    const [user, setUser] = useState(initialState.user);
    const [amount, setAmount] = useState(initialState.amount);
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

    const updateAmountPoints = () => {
        UserService.postData(1000)
                   .then((response) => response.json())
                   .then((data) => {
                        const newPoints = data['New Points'];
                        setAmount({ points: newPoints });
                   })
                   .catch((err) => console.error(err));
    }
    const contextValue = {
        data: { allItems, user, amount },
        mutations: { setAllItems, updateAmountPoints }
    };
    return (
        <StoreContext.Provider value={contextValue}>
            { children }
        </StoreContext.Provider>
    );
};
