import Image from 'next/image';
import router from 'next/router';
import { IconEmail, IconMaps, IconRelogio, Icontelephone } from '../../icons';

export function Rodape (){

    return(

      <div className='bg-[#292929] py-4 px-4'>

      <div className='py-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
      
      <div className='flex justify-center'>
        <div>
        <div className="flex gap-4">   
          <div onClick={() => router.push("#")} className='bg-[#4e4e4e]/75 px-3 rounded-lg grid items-center hover:bg-[#6708ff] hover:-translate-y-1 hover:scale-105 duration-300 py-2'>
          <Image
            width={25}
            height={25}
            src={'/icon_face.svg'}
            alt="Avatar do Usuário"
            className={`cursor-pointer`}/>
          </div>

          <div onClick={() => router.push(`https://api.whatsapp.com/send?phone=558181670177&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20atendimento%20da%20LL CONSTRUTORA`)} className='bg-[#4e4e4e]/75 px-3 rounded-lg grid items-center hover:bg-[#00A859] hover:-translate-y-1 hover:scale-105 duration-300 py-2'>
          <Image
            width={25}
            height={25}
            src={'/icon_whatsapp.svg'}
            alt="Avatar do Usuário"
            className={`cursor-pointer`}/>
          </div>

          <div onClick={() => router.push("https://www.instagram.com/llconstrutora_/")} className='bg-[#4e4e4e]/75 px-3 rounded-lg grid items-center hover:bg-[#ff2050] hover:-translate-y-1 hover:scale-105 duration-300 py-2'>
          <Image
            width={25}
            height={25}
            src={'/icon_instagram.svg'}
            alt="Avatar do Usuário"
            className={`cursor-pointer`}/>
          </div>
          </div>
          
          <div className='mt-10'>
          <div className='text-white font-semibold mt-3 cursor-pointer' onClick={() => router.push("/")}>Página Inicial</div>
          <div className='text-white font-semibold mt-3 cursor-pointer' onClick={() => router.push("/sobre")}>Sobre</div>
          <div className='text-white font-semibold mt-3 cursor-pointer' onClick={() => router.push("/produtos")}>Produtos</div>
          <div className='text-white font-semibold mt-3 cursor-pointer' onClick={() => router.push("/contato")}>Contatos</div>
          </div>
        </div>
      </div>

      <div className='mt-4 md:mt-0 flex justify-center md:justify-start'>
        <div>
        <div className='text-white font-semibold mt-3 flex gap-4 items-center'>{Icontelephone} ( 81 ) 9 8167-0177</div>
        <div className='text-white font-semibold mt-3 flex gap-4 items-center'>{IconEmail} comercial@llconstrutora.com.br</div>
        <div className='text-white font-semibold mt-3 flex gap-4 items-center'>{IconMaps} Av João Francisco de Melo, 520, 1° andar, centro, São José da Coroa Grande - PE CEP: 55565-000</div>
        <div className='text-white font-semibold mt-3 flex gap-4 items-center'>{IconRelogio} Seg a Sexta: 8h às 17h / Sábado: 8h às 12h </div>
        </div>
      </div>

      <div className='flex justify-center mt-8 md:mt-0'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.838445626914!2d-35.14958790000001!3d-8.894607900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700630d382e4f07%3A0x7f7e50f169de0b16!2sAv.%20Jo%C3%A3o%20Francisco%20de%20Melo%2C%20520%20-%20Centro%2C%20S%C3%A3o%20Jos%C3%A9%20da%20Coroa%20Grande%20-%20PE%2C%2055565-000!5e0!3m2!1spt-BR!2sbr!4v1679436355331!5m2!1spt-BR!2sbr" width="300" height="300"></iframe>
      </div>
       
      </div>       

      <div className='border-t-2'>
       <p className='text-center text-white text-xs md:text-base mt-4'>LL CONSTRUTORA LTDA © Todos os direitos reservados</p>
       <p className='text-center text-white text-sm md:text-base'>CNPJ: 14.456.876/0001-51</p> 
      </div>
    
      </div>


    )
}

