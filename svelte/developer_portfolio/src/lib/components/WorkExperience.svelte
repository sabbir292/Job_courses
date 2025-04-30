<script lang="ts">
    let {workExperience} = $props()
</script>

<div>
    <ul>
        {#each workExperience as experience, idx (idx)}
            <li>
                <article>
                    <h4>{experience.jobTitle}</h4>
                    <div>
                        <p>{experience.company}</p>
                        <p>{experience.startDate}
                            {#if experience.endDate}
                                / {experience.endDate}
                                {:else}
                                / Present
                            {/if}
                        </p>
                    </div>
                </article>
            </li>
        {/each}
    </ul>
</div>

<style>
    ul{
        text-transform: capitalize;
    }
    article>div{
        display: flex;
        justify-content: space-between;
    }
</style>