<script lang="ts">
	import type { Snippet } from "svelte";

    interface HeaderProps{
        children: Snippet
        sectionName: string
    }
    let {children, sectionName}:HeaderProps = $props()
</script>


<section class="default-margin mt-l" id={sectionName}>
    <h1>{@render children()}</h1>
    <div class="underscore"></div>
</section>