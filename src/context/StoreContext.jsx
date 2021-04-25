import { createContext, useEffect, useState } from 'react';
import { ProductsService } from 'services/products.service';
import { UserService } from 'services/user.service';
import config from 'config/config';

const INVISIBLE_COLOR = '#F43936';
const newPointsName = 'New Points';
const initialState = { user: {fullName: '?', points: 0},
                       amount: { points: null, initPoints: null, pointsGiven: 0},
                       badgePropsLow: {amount: config.LOW, focusColor: '#FFFFFF', loading: false},
                       badgePropsMiddle: {amount: config.MIDDLE, focusColor: '#FFFFFF', loading: false},
                       badgePropsHigh: {amount: config.HIGH, focusColor: '#FFFFFF', loading: false},
                       products: [] };

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [products, setProducts] = useState(initialState.products);
    const [user, setUser] = useState(initialState.user);
    const [amount, setAmount] = useState(initialState.amount);
    const [badgePropsLow, setBagdePropsLow] = useState(initialState.badgePropsLow);
    const [badgePropsMiddle, setBagdePropsMiddle] = useState(initialState.badgePropsMiddle);
    const [badgePropsHigh, setBagdePropsHigh] = useState(initialState.badgePropsHigh);

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

    const setBagdeProps = (amount, badgeProps) => {
        switch (amount) {
            case config.LOW:
                console.count('config.LOW');
                setBagdePropsLow(badgeProps);
                break;
            case config.MIDDLE:
                console.count('config.MIDDLE');
                setBagdePropsMiddle(badgeProps);
                break;
            case config.HIGH:
                console.count('config.HIGH');
                setBagdePropsHigh(badgeProps);
                break;
            default:
                console.error(`option invalid ${amount}`);
                break;
        }
    }
    const updateAmountPoints = (amount) => {
        setBagdeProps(amount, {focusColor: INVISIBLE_COLOR, loading: true});

        UserService.addPoints(amount)
                   .then((response) => response.json())
                   .then((data) => {
                        const newPoints = data[newPointsName];
                        const lastPoints = newPoints - amount.initPoints;
                        setAmount({ points: newPoints, initPoints: amount.initPoints, pointsGiven: lastPoints });
                        setBagdeProps(amount, initialState.badgePropsLow);
                   })
                   .catch((err) => console.error(err));
    }
    const contextValue = {
        data: { products, user, amount, badgePropsLow, badgePropsMiddle, badgePropsHigh },
        mutations: { setBagdePropsLow, setBagdePropsMiddle, setBagdePropsHigh, updateAmountPoints }
    };
    return (
        <StoreContext.Provider value={contextValue}>
            { children }
        </StoreContext.Provider>
    );
};
