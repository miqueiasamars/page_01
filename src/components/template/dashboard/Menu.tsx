// import MenuItem from './MenuItem'
import { IconBox, IconGear, IconBell, IconSair, IconBot, IconAssinatura, IconFinanceiro, IconUsers, IconHomeCadeado, IconHome, IconTelegram, Icontelephone } from '../../icons'
import { useContext, useEffect, useState } from 'react'
import router from 'next/router'
import AvatarUsuario from './AvatarUsuario'
import { Context } from '../../../data/contexts/Context'

function Menu () { 

const {state, dispatch} = useContext(Context)

const statusmenu = state.theme.menu
console.log(statusmenu)

const [drawer, setDrawer] = useState('0')
const [tela, setTela] = useState(0);

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
{tela > 900&&
    <aside className='bg-[#0a0707]/75 shadow-lg border-b-2 border-b-[#796A37]/75 fixed bottom-0 top-0 w-full px-10 h-16'>     

        <ul className='flex mt-2'>           
            {/*  Produtos de produtores  */}
            {
             <div onClick={menu1} className={`flex items-center gap-4 px-8 py-3 cursor-pointer ${statusmenu  === '1'?'text-[#796A37]':'text-[#fff]'} hover:text-[#796A37] font-medium`}>
             <div className={`flex items-center gap-4 transition ease-in-out delay-150 ${statusmenu  === '1'&&'translate-x-4'} ${statusmenu  === '1'&&'scale-105'} hover:translate-x-4 hover:scale-105 duration-200`}>
             <p>{IconHome}</p>
                <p>INÍCIO</p>
                </div>
            </div>
            }         
            {
            <div onClick={menu2} className={`flex items-center gap-4 px-8 py-3 cursor-pointer ${statusmenu  === '2'?'text-[#796A37]':'text-[#fff]'} hover:text-[#796A37] font-medium`}>
            <div className={`flex items-center gap-4 transition ease-in-out delay-150 ${statusmenu  === '2'&&'translate-x-4'} ${statusmenu  === '2'&&'scale-105'} hover:translate-x-4 hover:scale-105 duration-200`}>
            <p>{IconUsers}</p>
                <p>SOBRE</p>
            </div>
            </div>
            }
             {
            <div onClick={menu3} className={`flex items-center gap-4 px-8 py-3 cursor-pointer ${statusmenu  === '3'?'text-[#796A37]':'text-[#fff]'} hover:text-[#796A37] font-medium`}>
            <div className={`flex items-center gap-4 transition ease-in-out delay-150 ${statusmenu  === '3'&&'translate-x-4'} ${statusmenu  === '3'&&'scale-105'} hover:translate-x-4 hover:scale-105 duration-200`}>
            <p>{IconBox}</p>
                <p>PRODUTOS</p>
            </div>
            </div>
            } 
             {/*  Financeiro  */}
            {
            <div onClick={menu4} className={`flex items-center gap-4 px-8 py-3 cursor-pointer ${statusmenu  === '4'?'text-[#796A37]':'text-[#fff]'} hover:text-[#796A37] font-medium`}>
            <div className={`flex items-center gap-4 transition ease-in-out delay-150 ${statusmenu  === '4'&&'translate-x-4'} ${statusmenu  === '4'&&'scale-105'} hover:translate-x-4 hover:scale-105 duration-200`}>
            <p>{Icontelephone}</p>
                <p>CONTATO</p>
            </div>
            </div>
            }        
        </ul>            
    </aside> 
}
</>
)

}

export default Menu