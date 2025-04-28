import { DB, AUTH } from "./config.client";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { goto } from "$app/navigation";
import { toasts } from "svelte-toasts";

export async function registerUser({email, password}){
    try {
       const request = await createUserWithEmailAndPassword(AUTH, email, password)
       authRedirect('/', request.user.uid)
       toasts.add({type:'success', description: 'Registered Successfully'})
       const newUser = {
        uid: request.user.uid,
        email: request.user.email,
        firstName: '',
        lastName: '',
        isAdmin: false
       }
    await setDoc(doc(DB, 'users', request.user.uid), newUser)

    } catch (error) {
        toasts.add({type:'error', description: error.code})
        throw new Error(error)
    }
}

export async function login({email, password}){
    try {
        const request = await signInWithEmailAndPassword(AUTH, email, password)
        authRedirect('/', request.user.uid)
        toasts.add({type:'success', description: 'Successfully signed in'})
    } catch (error) {
         toasts.add({type:'error', description: error.code})
         throw new Error(error)
     }
}

export const logout = async () => {
    await signOut(AUTH)
    //delete token by get req
    await fetch('/api/auth/token')
    await authRedirect('/')
}

async function authRedirect(url){
    await setAccessToken()
    await goto(url)
}

export const setAccessToken = async () => {
    const user = AUTH.currentUser
    if(!user){
        return
    }
    // refresh
    const token = await user.getIdToken(true)

    // post the token
    await fetch('/api/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token, email: user.email}),
        credentials: 'include' // this is critical
      });
      
}