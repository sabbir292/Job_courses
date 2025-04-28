<script>
    import { createForm } from 'felte';
    import { validator } from '@felte/validator-yup';
    import * as yup from 'yup';
    import { registerUser, login } from '$lib/firebase/client/auth.client';
	import Loader from '$lib/components/utils/Loader.svelte';

    let loader = $state(false)
    let formType = $state('signin')

    const formData = $state({
        email:'',
        password: ''
    })

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });

    const { form, errors } = createForm({
        onSubmit: (values) => {
            handleSubmit(values)
        },
        extend: validator({ schema }), 
    });

    function handleSubmit(values){
        loader = true
        if(formType === 'signin'){
            login(formData).finally(()=> {
                loader = false;
            })
        }else{
            registerUser(formData).finally(()=> {
                loader = false;
            })
        }
    }

    function toggleSigninType(){
        formType = formType === 'signin' ? 'signup' : 'signin';
    }

  </script>
    {#if loader}
        <Loader />
        {:else}
        <div>
            <h1>{formType === 'signin'? 'SignIn' : 'Sign Up'}</h1>
              <form use:form>
                  <label for="email">Email:</label>
                  <input class:error-in = {$errors.email} type="email" name="email" bind:value={formData.email}>
                  {#if $errors.email}
                    <p>Invalid Email</p>
                  {/if}
                  
                  <label for="password">Password:</label>
                  <input class:error-in = {$errors.password} type="password" name="password" bind:value={formData.password}>
                  {#if $errors.password}
                    <p>Invalid Email</p>
                  {/if}
        
                  <button>{formType === 'signin'? 'SignIn' : 'Sign Up'}</button>
                </form>
                
                <button onclick={toggleSigninType}>{formType === 'signin'? 'New User? Sign Up' : 'Already User? SignIn'}</button>
          </div>
    {/if}
 

  <style>
    .error-in{
        border: 1px solid red;
    }
  </style>