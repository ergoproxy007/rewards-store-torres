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
                       reedemMessage: {id: null, missing: false, loading: false, ready: false, message: null},
                       products: [] };

export const StoreContext = createContext(initialState);

/**
 * define the global state for main features concerns the users, products, reedemptions 
 * @returns context created
 */
export const StoreProvider = ({ children }) => {
    const [products, setProducts] = useState(initialState.products);
    const [user, setUser] = useState(initialState.user);
    const [amount, setAmount] = useState(initialState.amount);
    const [badgePropsLow, setBagdePropsLow] = useState(initialState.badgePropsLow);
    const [badgePropsMiddle, setBagdePropsMiddle] = useState(initialState.badgePropsMiddle);
    const [badgePropsHigh, setBagdePropsHigh] = useState(initialState.badgePropsHigh);
    const [reedemMessage, setReedemMessage] = useState(initialState.reedemMessage);

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

    const setBagdeProps = (valueAmount, badgeProps) => {
        switch (valueAmount) {
            case config.LOW:
                setBagdePropsLow(badgeProps);
                break;
            case config.MIDDLE:
                setBagdePropsMiddle(badgeProps);
                break;
            case config.HIGH:
                setBagdePropsHigh(badgeProps);
                break;
            default:
                console.error(`option invalid ${amount}`);
                break;
        }
    }
    const updateAmountPoints = (valueAmount) => {
        setBagdeProps(valueAmount, {focusColor: INVISIBLE_COLOR, loading: true});

        UserService.addPoints(valueAmount)
                   .then((response) => response.json())
                   .then((data) => {
                        const newPoints = data[newPointsName];
                        const lastPoints = newPoints - amount.initPoints;
                        setAmount({ points: newPoints, initPoints: amount.initPoints, pointsGiven: lastPoints });
                        setBagdeProps(valueAmount, initialState.badgePropsLow);
                        setReedemMessage({ ready: false, missing: false, loading: false, message: data.message });
                   })
                   .catch((err) => console.error(err));
    }
    const reedem = (amount, product, handleClose, handleOpen) => {
        setReedemMessage({ ready: false, id: product.id, missing: false, loading: true, message: null });

        const points = amount.points ? amount.points : amount.initPoints;
        if (product.cost <= points) {
            UserService.reedem(product.id)
                        .then((response) => response.json())
                        .then((data) => {
                                updateForReedem(points, product.cost, amount, data.message, handleOpen);
                        })
                        .catch((err) => console.error(err));
        } else {
            const missingPoints = product.cost - points;
            setReedemMessage({ ready: false, id: product.id, missing: true, loading: false, message: `Reedem canceled! ${missingPoints} points are needed` });
        }
    }
    const updateForReedem = (points, cost, amount, message, handleOpen) => {
        const newPoints = points - cost;
        setAmount({ points: newPoints, initPoints: amount.initPoints, pointsGiven: amount.pointsGiven });
        setReedemMessage({ ready: true, missing: false, loading: false, message: message });
        handleOpen();
    }
    const contextValue = {
        data: { 
                products,
                user,
                amount,
                reedemMessage,
                badgePropsLow,
                badgePropsMiddle,
                badgePropsHigh
        },
        mutations: {
                    setBagdePropsLow,
                    setBagdePropsMiddle,
                    setBagdePropsHigh,
                    updateAmountPoints,
                    reedem
       }
    };
    return (
        <StoreContext.Provider value={contextValue}>
            { children }
        </StoreContext.Provider>
    );
};
