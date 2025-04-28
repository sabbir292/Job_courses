import { AUTH } from '$lib/firebase/server/config.server.js'
import { json } from '@sveltejs/kit'


export async function POST({request, cookies}) {
    try {
        const {token, email} = await request.json()
        const verify = await AUTH.verifyIdToken(token?? '', true)

        if(verify.email === email){
            cookies.set('GS-T', token, {maxAge: verify.exp, path: '/'})
            return json({message:'success', status: 200})
        }else{
            return json({message:'bad token', status: 403})
        }
        
    } catch (error) {
        return json({message:error, status: 403})
    }
}

export const GET = async({cookies}) => {
    cookies.delete('GS-T', {path: '/'})
    return json({message:'success', status: 200})
}