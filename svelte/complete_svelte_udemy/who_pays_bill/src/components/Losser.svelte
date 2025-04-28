<script>
    import { get } from "svelte/store";
    import { deciderStore, liveComponentStore, payerStore } from "../store/billing.store";

function renderHome(){
    liveComponentStore.set('home')
    payerStore.set([])
}
console.log(get(deciderStore))
</script>

<section>
    <p>The losser is {$deciderStore}</p>
    <button onclick={renderHome}>Try Again</button>
</section>