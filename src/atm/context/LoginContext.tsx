import { createContext, Dispatch, FC, ReactNode, useContext, useReducer } from "react";


interface LoginState {
    pin: number;
}

type Action = { type: 'SET_PIN'; payload: number };

const initialState: LoginState = {
    pin: 0,
};

const LoginContext = createContext<{
    state: LoginState;
    dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null});

export const LoginProvider: FC<{children: ReactNode}> = ({children}) => {
    const [state, dispatch] = useReducer((state: LoginState, action: Action) => {
        switch (action.type) {
            case 'SET_PIN':
                return {...state, pin: action.payload};
            default:
                return state;
        }
    }, initialState);

    return (
        <LoginContext.Provider value={{state, dispatch}}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginContext = () => useContext(LoginContext);