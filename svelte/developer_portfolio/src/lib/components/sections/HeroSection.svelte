<script lang="ts">
	import { goto } from '$app/navigation';
    import {Button} from '$components'

    function onclick(){
        goto('/#contact-us')
    }
</script>

<section class="hero-section default-margin">
    <h3>Hello! I'm Sabbir</h3>
    <div class="underscore mb-m"></div>
    <h1>I'm a Frontend developer crafting intuitive and performant</h1>
    <h1 class="dark-grey">web experiences.</h1>
    <Button {onclick}>Let's talk</Button>
</section>

<style>
    h3{
        padding-top: 4rem;
    }
</style>