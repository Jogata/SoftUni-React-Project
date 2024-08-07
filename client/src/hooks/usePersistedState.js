import { useState } from "react";

export default function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (!persistedState) {
            return initialState;
        }

        const authData = JSON.parse(persistedState);

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