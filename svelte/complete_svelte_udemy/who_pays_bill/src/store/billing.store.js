import { writable, derived } from "svelte/store";

export const payerStore = writable([])

export const deciderStore = derived(payerStore, ($payerStore) => {
    if($payerStore && $payerStore.length >= 0){
        let randIdx = Math.floor(Math.random()* $payerStore.length)
        return $payerStore[randIdx]
    }
    return null
})

export const liveComponentStore = writable('home')