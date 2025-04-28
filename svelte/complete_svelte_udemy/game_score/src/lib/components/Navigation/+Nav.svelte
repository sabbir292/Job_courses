<script>
    import { page } from "$app/stores";
	import { logout } from "$lib/firebase/client/auth.client";
    import authStore from "$lib/stores/auth.store";
	import { readable } from "svelte/store";
    let public_routes = ['home', 'signin']
    let private_routes = ['home', 'dashboard']

    authStore.subscribe(cur => {
        console.log(cur, 'readable')
    })
</script>

<header>
    <h2>GameScore</h2>
    <ul>
        {#if $authStore.isAuth}
            {@render routes(private_routes)}
            {:else}
            {@render routes(public_routes)}
        {/if}
        {#if $authStore.isAuth}
            <button
            onclick={logout}>LogOut</button>
        {/if}
    </ul>
</header>
<hr>


{#snippet routes (links)}
    {#each links as link, idx (idx)}
    <li>
        <a 
            class:active = {
                (link === 'home' && $page.url.pathname === '/') ||
                    ($page.url.pathname.match(`/${link}`)
                )
            }

            href={link === 'home'? '/': `/${link}`}>{link}
        </a>
    </li>
    {/each}
{/snippet}


<style>
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    ul, li, a {
        list-style: none;
        text-decoration: none;
        text-transform: capitalize;
        color: black;
    }
    ul{
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .active{
        text-decoration: underline;
        color: blue;
    }

</style>