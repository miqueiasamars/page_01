import Menu from './Menu'
import Conteudo from './Conteudo'
import Head from 'next/head';
import { Rodape } from './Rodape';
import Cabecalho from './Cabecalho';
import MenuCelular from './MenuCelular';
import router from 'next/router';
import { IconWhatsApp } from '../../icons';

interface LayoutProps {
    children?: any
}

export default function Layout(props: LayoutProps) {    
    return (       
        <div className={`flex`}>            
            <Head>
            <title>LL CONSTRUTORA</title>
            <meta name="Gerenciamenot de gurpos no telegram" content="" />     
            </Head> 
            
            <div className=''>
            <Menu />
            <MenuCelular/>
            </div>
          
            <div className='w-screen h-screen overflow-auto touch-auto'>                
            <Conteudo > 
           
            <div 
            onClick={() => router.push(`https://api.whatsapp.com/send?phone=558181670177&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20atendimento%20da%20 LL CONSTRUTORA`)}
            className="fixed bottom-10 bg-[#18a70b] text-white right-3 md:right-10 rounded-full px-2 py-2">
                {IconWhatsApp}
            </div>     
         
                {props.children}
            </Conteudo>           
            <Rodape/>
            </div>
        </div>
       
    )
}