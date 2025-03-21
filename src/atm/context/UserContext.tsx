import { createContext, Dispatch, FC, ReactNode, useContext, useReducer } from "react";
import { AtmUserInterface } from "../interfaces/AtmUserInterface";

type Action = 
    | { type: 'SET_PIN'; payload: number }
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_BALANCE'; payload: number }
    | { type: 'SET_FUNDS'; payload: number }
    | { type: 'SET_CARD_NUMBER'; payload: string }
    | { type: 'SET_ERROR'; payload: string }
    | { type: 'RESET' }

const initialState: AtmUserInterface = {
    pin: 0,
    name: '',
    balance: 0,
    funds: 0,
    cardNumber: '',
    error: '',
};

const UserContext = createContext<{
    state: AtmUserInterface;
    dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null});

export const UserProvider: FC<{children: ReactNode}> = ({children}) => {
    const [state, dispatch] = useReducer((state: AtmUserInterface, action: Action) => {
        switch (action.type) {
            case 'SET_PIN':
                return {...state, pin: action.payload};
            case 'SET_NAME':
                return {...state, name: action.payload};
            case 'SET_BALANCE':
                return {...state, balance: action.payload};
            case 'SET_FUNDS':
                return {...state, funds: action.payload};
            case 'SET_CARD_NUMBER':
                return {...state, cardNumber: action.payload};
            case 'SET_ERROR':
                    return {...state, error: action.payload};
            case 'RESET':
                return initialState;
            default:
                return state;
        }
    }, initialState);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);