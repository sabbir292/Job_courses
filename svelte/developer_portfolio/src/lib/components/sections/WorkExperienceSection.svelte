<script lang="ts">
    import {WorkExperience} from '$components'
    let {workExperience} = $props()
</script>

<div class="mb-l mt-m">
    <WorkExperience {workExperience}/>
    <h1>Past Work Experience</h1>
</div>

<style>
    div{
        display: grid;
        grid-template-columns: 37% 59%;
        justify-content: space-between;
        width: 100%;
    }
</style>