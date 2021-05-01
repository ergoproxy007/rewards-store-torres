import { createContext, useEffect, useState } from 'react';
import { UserService } from 'services/user.service';

const initialState = { user: {fullName: '?', points: 0},
                       amount: { points: null, initPoints: null, pointsGiven: 0},
                       products: [] };

export const HistoryContext = createContext(initialState);

/**
 * global state for product's history 
 * @returns context created
 */
export const HistoryProvider = ({ children }) => {
    const [products, setProducts] = useState(initialState.products);

    useEffect(() => {
        (async () => {
            if (products.length <= 0) {
                try {
                    const data = await UserService.getHistory();
                    setProducts({ data });
                } catch (e) {
                    console.error(e);
                    setProducts( [{}] );
                }
            }
        })()
    }, [products]);

    const contextValue = {
        data: { 
                products
        },
        mutations: {
       }
    };
    return (
        <HistoryContext.Provider value={contextValue}>
            { children }
        </HistoryContext.Provider>
    );
};
