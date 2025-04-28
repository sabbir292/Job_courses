<script>
  import { get } from 'svelte/store';
  import {payerStore, deciderStore, liveComponentStore} from '../store/billing.store'

  let payer = $state('')
  let losser;

  function addPayer(e){
    e.preventDefault()
    if(payer){
        payerStore.update(prev => [...prev, payer])
    }
    payer = ''
    console.log(get(payerStore), get(deciderStore), get(liveComponentStore))
  }

  function decidePayer(){
    if($payerStore && $payerStore.length > 0){
        liveComponentStore.set('looser')
    }
    return
  }

</script>

<section>
    <h1>Who pays the bill</h1>
    <form action="" onsubmit={addPayer}>
        <input type="text" bind:value={payer}>
        <button>Add</button>
    </form>
    {#each $payerStore as payer, idx (idx)}
        <p>{payer}</p>
    {/each}
    <button onclick={decidePayer}>Who's the Looser?</button>
</section>
