<script lang="ts">
    let {name}:{name: string} = $props()
    // let inputVal = $state()
    // let storeStatus: 'OPEN' | "CLOSED" = $state('OPEN')    

    // function onclick(){
    //     storeStatus = storeStatus === 'OPEN'? 'CLOSED' : 'OPEN' 
    // }

    let form_state = $state<{answer: {[key:string]: string}, step: number, err: string}>({
        answer: {},
        step: 0,
        err: ''
    })

    const QUESTIONS = [
		{
			question: 'What is your name?',
			id: 'name',
			type: 'text'
		},
		{
			question: "What's your birthday",
			id: 'birthday',
			type: 'date'
		},
		{
			question: "what's your favorite color",
			id: 'color',
			type: 'color'
		}
	];

    function nextStep(id: string){
        console.log('nextStep')
       if(form_state.answer[id]){
        form_state.step ++
        form_state.err = ''
       }else{
        form_state.err = 'Fill the form..'
       }
    }
</script>

<h1>
    Hello I am {name}'s form.
</h1>
{#if form_state.step >= QUESTIONS.length}
<h3>Thank you</h3>
{:else}
<h3>Steps: {form_state.step + 1}</h3>
{/if}

{#if form_state.err}
    <p>{form_state.err}</p>
{/if}

{#each QUESTIONS as question, index (index)}
    {#if index === form_state.step}
    <div>
        {@render form(question)}
    </div>   
    {/if}
{/each}






<!-- <h2>{inputVal}</h2>
<input type="text" bind:value={inputVal}>
<p>The store is {storeStatus}</p>
<button {onclick}>Toggle Status</button> -->

{#snippet form({question, type, id}:{question: string, type: string, id:string})}
    <div>
        <label for={id}>{question}</label>
        <input {type} {id} bind:value={form_state.answer[id]}>
    </div>
    <button onclick={() => nextStep(id)} >Next</button>
{/snippet}

<style>
    h1{
        color:green;
    }
</style>