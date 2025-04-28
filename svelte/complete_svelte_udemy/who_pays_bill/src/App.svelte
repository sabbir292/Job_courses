<script>
  import Home from "./components/Home.svelte";
  import Losser from "./components/Losser.svelte";
  import {liveComponentStore} from './store/billing.store'
</script>

<main>
  {#if $liveComponentStore === 'home'}
    <Home />
    {:else}
    <Losser />
  {/if}
</main>

<style>

</style>
