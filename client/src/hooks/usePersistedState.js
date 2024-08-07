import { useState } from "react";

export default function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const persistedAuth = localStorage.getItem(key);

        if (!persistedAuth) {
            return initialState;
        }

        const authData = JSON.parse(persistedAuth);

        return authData;
    });
    // console.log(initialState);
    
    const updateState = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        // console.log(value);
        setState(value);
    }

    return [state, updateState];
}