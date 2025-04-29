<script lang="ts">
	import type { Snippet } from "svelte";

    interface ButtonProps{
        children: Snippet
        onclick: ( (e:MouseEvent) => void | (()=> void) )
        className?: string
    }

    let {children, className, ...props}: ButtonProps = $props()
</script>

<button class={`btn mt-m ${className}`} {...props}>
    {@render children()}
</button>

<style>
    .btn{
        background-color: black;
        border-radius: 1rem;
        padding: 1rem 1.6rem;
        color: white;
        font-weight: 600;
        font-size: 1rem;
    }
</style>