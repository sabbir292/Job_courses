<script lang="ts">
    import {SectionHeader, Button} from '$components'
    import aboutMeImg from '$assets/about-me.jpeg'
	import { goto } from '$app/navigation';
	import WorkExperienceSection from './WorkExperienceSection.svelte';

    let {workExperience} = $props()

    function onclick(){
        goto('/#about-me')
    }
</script>

<section class="default-margin">
    <SectionHeader sectionName = {'about-me'}>About Me</SectionHeader>
    <div class="about mt-l">
        <img src={aboutMeImg} alt="">
        <div class="text">
            <p>
                Hey, I'm Niklas, the driving force behind my freelancing agency
                specializing in web development and data science.
              </p>
              <p>
                With years of hands-on experience tackling real-world coding challenges
                and meeting diverse client needs, I've built a deep understanding of the
                tech landscape. But beyond coding, my true passion lies in teaching.
                I've had the privilege of guiding hundreds of aspiring developers,
                focusing on making coding both practical and accessible. My goal is to
                translate complex concepts into actionable skills that you can apply
                right away.
              </p>
              <p>
                Through my courses, I’m committed to sharing the insights and lessons
                I’ve learned in the field, so you can skip the pitfalls and fast-track
                your development journey. If you're eager to learn from real-world
                experience and practical know-how, let's dive in together.
              </p>
              <Button className={'about-me'} {onclick}>Tell Me About The Project</Button>
        </div>
    </div>
    <WorkExperienceSection {workExperience}/>
</section>

<style>
    .about{
        display: flex;
        align-items: start;
        justify-content: space-between;
        gap: 2rem;
    }
    img{
        height: 26rem;
        border-radius: 2rem;
    }
</style>