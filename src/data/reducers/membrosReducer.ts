import { reducerActionType } from "../types/reducerActinTypes";

export type membrosType = {
    membros: [{
        [x: string]: any;
        id: string,
        codigo_compra: string,
        id_comprador: string,
        id_chat: string,
        id_vendedor: string,
        id_telegram: string,
        nome_produto: string,
        adm: string,
        destino: string,
        status_canal: string,
        bot: string,
        user_telegram: string,
        telefone: string,
        email: string,
        name: string,
        sobrename: string,
        bani_gratuito: string,
        data_vencimento: string,        
        created_at: string, 
        updated_at: string
    }],
}

export const membrosInitialState: membrosType = {
    membros: [{ 
        id: '',
        codigo_compra: '',
        id_comprador: '',
        id_chat: '',
        id_vendedor: '',
        id_telegram: '',
        nome_produto: '',
        adm: '',
        destino: '',
        status_canal: '',
        bot: '',
        user_telegram: '',
        telefone: '',      
        email: '',
        name: '',
        sobrename: '',
        bani_gratuito: '',
        data_vencimento: '',
        created_at: '', 
        updated_at: ''
    }],
}

export const membrosReducer = (state: membrosType, action: reducerActionType) => {

    switch(action.type){
        case 'MEMBROS':   
        return {...state, membros: action.payload.membros};                                     
        break;                 
    }

    return state;
   
}