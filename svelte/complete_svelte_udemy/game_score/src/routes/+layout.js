import { onAuthStateChanged } from "firebase/auth";
import { AUTH } from "$lib/firebase/client/config.client";


export const load = async() => {
    const getAuthUser  = ()=> {
        return new Promise((resolve) => {
            onAuthStateChanged(AUTH, (user) => {
                resolve(user ? user : false)
            })
        })
    }

    return {
        getAuthUser: getAuthUser
    }
}