
import { NextPage } from "next";
import Image from "next/image";
import router from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import * as fbq from '../lib/fpixel'

const Centrall: NextPage = () => {

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

  useEffect(() => {   
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
    <div className={`bg-[#11321A]`}>

      <div className={``}>
      {tela>=900?
      <img
         width={150}
         height={150}
         src={'/capa_01_md.png'}
         alt="Avatar do Usuário"
         className={`w-full`}/>
      :
      <img
         width={100}
         height={100}
         src={'/capa_01.png'}
         alt="Avatar do Usuário"
         className={`w-full`}/>
      }
        
      <div className="md:-mt-20 lg:-mt-48 px-4 text-white text-center">
        <h2 className="font-bold text-2xl md:text-4xl">FAÇA PARTE AINDA HOJE</h2>
        <h2 className="mt-1 font-bold text-2xl md:text-4xl">DA CONSULTORIA QUE MAIS CRESCE NO BRASIL !!!</h2>
        <h1 className="mt-10 font-semibold md:text-xl lg:text-2xl">Greens gratuitos todos os dias!</h1>        
       
        <button onClick={() => router.push("/contato")} className="bg-[#080808]/50 mb-10 px-14 lg:px-28 py-3 md:text-2xl rounded-lg mt-14 font-bold text-[#ffffff] border border-[#ffffff] hover:border-[#e0dd0f]">PEGUE SEU ACESSO AGORA</button>
      </div> 

      <div className="flex justify-center mt-20 px-4 md:px-20">
      <div className="border py-10 rounded-xl"> 
        <div className={`px-4 flex justify-center`}>
          <Image
            width={150}
            height={150}
            src={'/avatar_01.png'}
            alt="Avatar do Usuário"
            className={`cursor-pointer border-2 rounded-full`}/>
        </div>

        <div className="text-center mt-2 md:text-2xl font-bold text-white">Junior Alves</div>

        <div className="mt-10 font-serif text-center px-4 md:px-20 md:text-xl text-white">Empresário, engenheiro civil, apaixonado por números e futebol. Decidiu juntar suas habilidades para ganhar dinheiro e ajudar pessoas a ganhar junto com ele.</div>
        
        <div className="flex justify-center px-4"><button onClick={() => router.push("/contato")} className="bg-[#080808]/50 mb-10 px-14 lg:px-28 py-3 md:text-2xl rounded-lg mt-14 font-bold text-[#ffffff] border border-[#ffffff] hover:border-[#e0dd0f]">FAÇA PARTE DE NOSSA COMUNIDADE</button></div>
      </div>
      </div>

      <div className='mt-20 py-10 border-t'>
       <p className='text-center text-white text-xs'>© Todos os direitos reservados</p>
      </div>   

      </div>
  
    </div>




      {/* Global Site Code Pixel - Facebook Pixel */}
  <Script
  id="fb-pixel"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', ${fbq.FB_PIXEL_ID});
    `,
  }}
  />
         
    </>
  )
};

export default Centrall;

