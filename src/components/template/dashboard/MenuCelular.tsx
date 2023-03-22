// import MenuItem from './MenuItem'
import { IconBox, IconGear, IconBell, IconSair, IconBot, IconHomeCadeado, IconFinanceiro, IconAssinatura, IconUsers, IconHome, Icontelephone } from '../../icons'
import { useContext, useEffect, useState } from 'react'
import router from 'next/router'
import AvatarUsuario from './AvatarUsuario'
import { Context } from '../../../data/contexts/Context'

function MenuCelular () { 

const {state, dispatch} = useContext(Context)

const statusmenu = state.theme.menu

const [tela, setTela] = useState<number>(0)
const [status, setStatus] = useState(false)
const [drawer, setDrawer] = useState('0')

try{
    window.addEventListener('resize', function () {
        const x = window.screen.width;
        const y = window.screen.height;          
        setTela(x)
    });
}catch (erro){ 
}

useEffect(()=>{
    const x = window.screen.width;
    const y = window.screen.height;
    setTela(x)
},[])

const menu1 = () =>{
    router.push("/")
    dispatch({
    type: 'MENU',
    payload: {
        menu: '1',        
        }
    })
}
const menu2 = () =>{
    router.push("/sobre")
    dispatch({
    type: 'MENU',
    payload: {
        menu: '2',        
        }
    })
}
const menu3 = () =>{
    router.push("/produtos")
    dispatch({
    type: 'MENU',
    payload: {
        menu: '3',        
        }
    })
}
const menu4 = () =>{
    router.push("/contato")
    dispatch({
    type: 'MENU',
    payload: {
        menu: '4',        
        }
    })
}


return (
<> 
{tela <= 900&&
    <aside className='bg-[#0a0707]/75 shadow-lg border-b-2 border-b-[#99824D]/75 fixed bottom-0 top-0 w-full px-5 h-16'> 

          <div className='flex justify-end'>
            <button
            className='text-white mt-4' onClick={()=>setStatus(true)}> 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>            
          </div>    

    {status&&
    <div className=''>  
    <div className="fixed inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex justify-center min-h-screen text-center">    
    <div className="fixed inset-0 bg-[#ffffff] transition-opacity" aria-hidden="true"></div>    
    <div className="relative inline-block align-bottom  text-left overflow-hidden transform transition-all w-full">   
    {/* //////////////////////////////////////////////////////// */}

    <div onClick={()=>setStatus(false)} className="flex justify-end px-4 py-4"><a className='border border-[#4b4b4b] rounded-md px-2 font-semibold text-2xl text-black'>X</a></div>   
        
        <div className='flex flex-col items-center justify-center py-4 -mt-5 border-[#d1dddb] border-b'>
        <img
         width={150}
         height={150}
         src={'/logo_llconstrutora.png'}
         alt="Avatar do Usuário"
         className={``}/>
        </div>

        <ul className='flex-grow mt-10'>           
                {/*  Produtos de produtores  */}
            {
             <div onClick={menu1} className={`flex items-center gap-4 px-8 py-3 cursor-pointer ${statusmenu  === '1'?'text-[#796A37]':'text-[#a5a4a4]'} hover:text-[#796A37] font-medium`}>
             <div className={`flex items-center gap-4 transition ease-in-out delay-150 ${statusmenu  === '1'&&'translate-x-4'} ${statusmenu  === '1'&&'scale-105'} hover:translate-x-4 hover:scale-105 duration-200`}>
             <p>{IconHome}</p>
                    <p>INÍCIO</p>
                </div>
            </div>
            }         
            {
            <div onClick={menu2} className={`flex items-center gap-4 px-8 py-3 cursor-pointer ${statusmenu  === '2'?'text-[#796A37]':'text-[#a5a4a4]'} hover:text-[#796A37] font-medium`}>
            <div className={`flex items-center gap-4 transition ease-in-out delay-150 ${statusmenu  === '2'&&'translate-x-4'} ${statusmenu  === '2'&&'scale-105'} hover:translate-x-4 hover:scale-105 duration-200`}>
            <p>{IconUsers}</p>
                <p>SOBRE</p>
            </div>
            </div>
            }
             {
            <div onClick={menu3} className={`flex items-center gap-4 px-8 py-3 cursor-pointer ${statusmenu  === '3'?'text-[#796A37]':'text-[#a5a4a4]'} hover:text-[#796A37] font-medium`}>
            <div className={`flex items-center gap-4 transition ease-in-out delay-150 ${statusmenu  === '3'&&'translate-x-4'} ${statusmenu  === '3'&&'scale-105'} hover:translate-x-4 hover:scale-105 duration-200`}>
            <p>{IconBox}</p>
                <p>PRODUTOS</p>
            </div>
            </div>
            } 
             {/*  Financeiro  */}
            {
            <div onClick={menu4} className={`flex items-center gap-4 px-8 py-3 cursor-pointer ${statusmenu  === '4'?'text-[#796A37]':'text-[#a5a4a4]'} hover:text-[#796A37] font-medium`}>
            <div className={`flex items-center gap-4 transition ease-in-out delay-150 ${statusmenu  === '4'&&'translate-x-4'} ${statusmenu  === '4'&&'scale-105'} hover:translate-x-4 hover:scale-105 duration-200`}>
            <p>{Icontelephone}</p>
                <p>CONTATO</p>
            </div>
            </div>
            }                        
                 
        </ul>        

     
     {/* //////////////////////////////////////////////////////// */}          
    </div>
    </div>
    </div>   
    </div>}
    </aside> 
}
</>
)

}

export default MenuCelular