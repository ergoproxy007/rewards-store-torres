import { createContext, useEffect, useState } from 'react';
import { UserService } from 'services/user.service';

const MIN_AMOUNT = 1000;
const INVISIBLE_COLOR = '#F43936';
const newPointsName = 'New Points';
const initialState = { items: [], 
                       user: {fullName: '?', points: 0},
                       amount: { points: null, initPoints: null, pointsGiven: 0},
                       badgeProps: {focusColor: '#FFFFFF', loading: false} };
const jsonItems = [{}]; //crear aquí items de prueba para validar el hooks

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [allItems, setAllItems] = useState(initialState.items);
    const [user, setUser] = useState(initialState.user);
    const [amount, setAmount] = useState(initialState.amount);
    const [badgeProps, setBagdeProps] = useState(initialState.badgeProps);

    useEffect(() => {
        (async () => {
          console.count('async UserService.getData');
          const data = await UserService.getData();
          setAmount({ initPoints: data.points, points: null, pointsGiven: 0 });
          setUser({ fullName: data.name, points: data.points });
        })()
    }, []);

    useEffect(() => {
        if (user) {
            setUser(user);
        }
    }, [user]);

    useEffect(() => {
        setAllItems(jsonItems);
    }, [allItems]);

    const updateAmountPoints = () => {
        setBagdeProps({focusColor: INVISIBLE_COLOR, loading: true});
        UserService.postData(MIN_AMOUNT)
                   .then((response) => response.json())
                   .then((data) => {
                        const newPoints = data[newPointsName];
                        const lastPoints = newPoints - amount.initPoints;
                        setAmount({ points: newPoints, initPoints: amount.initPoints, pointsGiven: lastPoints });
                        setBagdeProps(initialState.badgeProps);
                   })
                   .catch((err) => console.error(err));
    }
    const contextValue = {
        data: { allItems, user, amount, badgeProps },
        mutations: { setAllItems, setBagdeProps, updateAmountPoints }
    };
    return (
        <StoreContext.Provider value={contextValue}>
            { children }
        </StoreContext.Provider>
    );
};
