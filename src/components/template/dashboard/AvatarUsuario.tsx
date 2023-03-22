import Link from 'next/link'
import { useContext } from 'react';
import { Context } from "../../../data/contexts/Context";

interface AvatarUsuarioProps {
    className?: string;
    urlRota?: string;
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    
    const {state} = useContext(Context)

    return (
        <div className='h-16 w-16 rounded-full border-2 border-[#bbc0bf] flex justify-center items-center'>
        <Link href={`${props.urlRota?props.urlRota:''}`}>           
            <img   
            width={90}
            height={90}                
            src={state.user.avatar_url!=''?state.user.avatar_url:'/avatar.svg'}
            alt="user"
            className={`rounded-full cursor-pointer ${props.className}`}/>           
        </Link>         
        </div>
    )
}