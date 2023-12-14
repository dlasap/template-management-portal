import { User } from "@/app/interface/UserInterface";
import { createContext, useContext, useState } from "react"


type Theme = 'dark' | 'light';

export function useUserContext() {
    //Custom hook created to error trap on the usecontext. use this to custom hook use context
    const user = useContext(UserContext);

    if (!user) {
        throw new Error(' useUserContext must be used inside the UserContext Provider');
    }
    return user;
}
