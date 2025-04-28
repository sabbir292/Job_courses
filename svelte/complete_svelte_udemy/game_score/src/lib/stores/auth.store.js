import { AUTH } from "$lib/firebase/client/config.client";
import { onAuthStateChanged } from "firebase/auth";
import { readable } from "svelte/store";
import { browser } from "$app/environment";

const DEFAULTS = {isAuth: false, id: null, email: null}

export default readable(
    DEFAULTS,
    (set) => {
        if(browser){
            onAuthStateChanged(AUTH, (user)=> {
                if(user){
                    set(
                        {isAuth: true, id: user.uid, email: user.email}
                    )
                }else{
                    set(DEFAULTS)
                }
            })
        }
    }
) 