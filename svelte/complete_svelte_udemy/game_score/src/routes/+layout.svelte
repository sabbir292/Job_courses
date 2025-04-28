<script>
    import Nav from "$lib/components/Navigation/+Nav.svelte";
	import Loader from "$lib/components/utils/Loader.svelte";
	import { setAccessToken } from "$lib/firebase/client/auth.client";
	import { onMount } from "svelte";
    import { ToastContainer, FlatToast }  from "svelte-toasts";
    export let data
    let loading = true

    onMount(async()=> {
        const user = await data.getAuthUser()
        await setAccessToken()
        loading = false
    })

</script>

{#if !loading}
    <main>
        <Nav />
        <div>
            <slot />
        </div>
        <ToastContainer placement="bottom-right" let:data={data}>
            <FlatToast {data} />
        </ToastContainer>
    </main>
{:else}
<Loader />
{/if}