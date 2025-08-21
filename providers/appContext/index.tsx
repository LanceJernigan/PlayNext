"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { State, Actions } from "./types";
import { User } from "@/app/api/graphql/resolvers/user/types";

const initialState: State = {
    user: null
}

const AppContext = createContext<{
    state: State,
    actions: Actions
}>({
    state: initialState,
    actions: {}
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState(initialState);

    const setUser = (user: User) => {
        setState({
            ...state,
            user,
        })
    }

    return (
        <AppContext.Provider value={{
            state,
            actions: {
                setUser
            }
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);