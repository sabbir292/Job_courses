<script>
 import bookCover from '$assets/book_cover.png'
 import phoneCover from '$assets/phone_cover.png'
 import { Button } from '$components';
 let {children} = $props()
 console.log(children)
</script>

<section class="flex items-center justify-center h-[100vh] overflow-y-hidden">
  <div class="relative h-full w-1/2 flex flex-col items-center justify-start pt-l text-center">
      <h1 class="purple">Move to</h1>
      <h1 class="purple">Spain</h1>
      <h4 class="italic bold">There's no need to do same mistake as me</h4>
      <img class="absolute right-[55%] bottom-[-1rem] scale-150" src={phoneCover} alt="">
      <img class="absolute right-16 bottom-[-6rem] scale-110 " src={bookCover} alt="">

    </div>
      
    <div class="flex flex-col items-center text-center bg-black text-white w-1/2 h-full pt-l px-12">
       {#if children}
        {@render children()}
        {:else}
        <h1>THIS EBOOK WILL</h1>
        <h1>SAVE YOU MONEY,</h1>
        <h1 class="mb-m">TIME & NERVES</h1>
 
        <p class="light-grey pb-l">
          I moved to Spain seven years ago. The process was painful and difficult. I
          learned most things the hard way: finding a job, getting a visa,
          calculating my cost of living, choosing an apartment. That's why I wrote
          this e-book, to tell you how I did it. No bullshit, no stress.
        </p>
        <Button>Buy this item for $10</Button>
        {/if}
    </div>
  </section>

  <style>

  </style>