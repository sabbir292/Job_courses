<script>
    import { page } from '$app/stores';
    export let links = ['dashboard', 'profile', 'articles', 'create'];
</script>
<div>

    <ul>
        {#each links as link}
        <li>
            <a
            class:active={
                (link === 'dashboard' && $page.url.pathname === '/dashboard/dashboard') ||
                    (`/dashboard/${link}` === $page.url.pathname)
                }
                href={link === 'dashboard' ? '/dashboard/dashboard' : `/dashboard/${link}`}
                >
                {link}
            </a>
        </li>
        {/each}
    </ul>
    <hr>
</div>
<div>
    <slot />
</div>


<!-- css -->
<style>
    ul, li, a {
        list-style: none;
        text-decoration: none;
        color: black;
        text-transform: capitalize;
    }
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;
    }
    a.active {
        /* font-weight: bold; */
        color: blue;
        text-decoration: underline;
    }
</style>
