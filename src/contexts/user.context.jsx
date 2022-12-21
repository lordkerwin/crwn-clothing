import { createContext, useEffect, useState } from "react";
import {
    createUserDocFromAuth,
    onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const value = {
        currentUser,
        setCurrentUser,
    };

    useEffect(() => {
        // return this to clean up on unmount,
        // this runs when auth state changes, and sets current user to whatever
        // it returns, either user object or null.
        return onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocFromAuth(user).then();
            }
            setCurrentUser(user);
        });
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
