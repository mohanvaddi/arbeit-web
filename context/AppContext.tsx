import React from 'react';
import { UserInterface } from '../types/arbeit';

export interface User extends UserInterface {}

export const initialUser: User = {
    userId: '',
    username: '',
    email: '',
    mobile: '',
    photoURL: '',
    isMobileVerified: false,
    openToWork: {
        userId: '',
        username: '',
        email: '',
        photoURL: '',
        phoneNumberVerified: false,
        location: '',
        expertise: '',
        workingDays: [],
        fromTime: '',
        toTime: '',
    },
    posts: [],
};

const initialState = {
    user: initialUser,
};

type AppState = typeof initialState;

type Action =
    | { type: 'SET_USER'; payload: User }
    | { type: 'SET_LOGGEDIN'; payload: boolean }
    | { type: 'SET_TOKEN'; payload: string };

const AppContext = React.createContext<{
    state: AppState;
    dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: {
                    ...action.payload,
                },
            };
        case 'SET_LOGGEDIN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: action.payload,
                },
            };
        case 'SET_TOKEN':
            return {
                ...state,
                user: {
                    ...state.user,
                    token: action.payload,
                },
            };
        default:
            return state;
    }
};

export const AppContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
