import { createContext, useEffect, useState } from 'react';
import { ProductsService } from 'services/products.service';
import { UserService } from 'services/user.service';

const MIN_AMOUNT = 1000;
const INVISIBLE_COLOR = '#F43936';
const newPointsName = 'New Points';
const initialState = { user: {fullName: '?', points: 0},
                       amount: { points: null, initPoints: null, pointsGiven: 0},
                       badgeProps: {focusColor: '#FFFFFF', loading: false},
                       products: [] };

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [products, setProducts] = useState(initialState.products);
    const [user, setUser] = useState(initialState.user);
    const [amount, setAmount] = useState(initialState.amount);
    const [badgeProps, setBagdeProps] = useState(initialState.badgeProps);

    useEffect(() => {
        (async () => {
          const data = await UserService.getMeData();
          setAmount({ initPoints: data.points, points: null, pointsGiven: 0 });
          setUser({ fullName: data.name, points: data.points });
        })()
    }, []);

    useEffect(() => {
        (async () => {
            if (products.length <= 0) {
                try {
                    const data = await ProductsService.getData();
                    setProducts({ data });
                } catch (e) {
                    console.error(e);
                    setProducts( [{}] );
                }
            }
        })()
    }, [products]);

    useEffect(() => {
        if (user) {
            setUser(user);
        }
    }, [user]);

    const updateAmountPoints = () => {
        setBagdeProps({focusColor: INVISIBLE_COLOR, loading: true});

        UserService.addPoints(MIN_AMOUNT)
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
        data: { products, user, amount, badgeProps },
        mutations: { setBagdeProps, updateAmountPoints }
    };
    return (
        <StoreContext.Provider value={contextValue}>
            { children }
        </StoreContext.Provider>
    );
};
