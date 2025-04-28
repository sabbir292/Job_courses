<script>
	import { PUBLIC_STRIPE_KEY } from "$env/static/public";
    import { loadStripe } from "@stripe/stripe-js";
    let {children, ...props} = $props()


    const onclick = async () => {
        const stripe = await loadStripe(PUBLIC_STRIPE_KEY)
        const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            }
        })

        const {sessionId} = await res.json()
       await stripe?.redirectToCheckout({sessionId})
    }
</script>

<button 
    {onclick}
    {...props}>
    {@render children()}
</button>

<style>
    button{
        background-color: black;
        color: white;
        border: 1px solid white;
        padding: 20px 24px;
        width: fit-content;
        text-transform: uppercase;
        transition: .3s ease;
    }
    button:hover{
        background-color: white;
        color: black;

    }
</style>