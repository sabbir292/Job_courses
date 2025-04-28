<script>
    let {faq, isActive, ...props} = $props()
</script>
    <ul class="mt-8">
        <button 
            {...props}
            class="flex justify-between w-full">
            <p class="font-bold pb-8">{faq.question}</p>
            <p 
                class:active={isActive}
                class="arrow">▼</p>
        </button>
        {#if isActive}
            <div class="answer">{faq.answer}</div>
        {/if}
    </ul>

<style>
    ul{
        border-bottom: 1px solid black;
        margin-top: 1rem;
        transition: .3s ease-in-out;
    }
    .arrow{
        transition: .3s ease-in-out;
        transform-origin: center;
    }
    .arrow.active{
        transform: rotate(180deg);
    }
    .answer{
        height: unset;
    }
</style>