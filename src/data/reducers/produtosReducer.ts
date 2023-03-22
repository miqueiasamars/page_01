import { reducerActionType } from "../types/reducerActinTypes";

export type produtosType = {
    produtos: [{       
        id:string,
        id_user:string,
        id_telegram_user:string,
        id_chat:string,
        codigo_produto:string,
        banir:string,
        categoria:string,
        created_at:string,
        link_permanente:string,
        status_venda:string,
        status_combo:string,
        subtitulo:string,
        tipo_grupo:string,
        titulo:string,
        updated_at:string,
        url_img:string,
        pixel_facebook: string,
        pixel_google: string,
        valor_pagamento_trimestral:string,
        valor_plano_anual:string,
        valor_plano_mensal:string,
        valor_plano_semestral:string,
        valor_plano_unico:string,
    }],
}

export const produtosInitialState: produtosType = {
    produtos: [
        { 
        banir:"",
        categoria:"",
        codigo_produto:"",
        created_at:"",
        id:"",
        id_chat:"",
        id_telegram_user:"",
        id_user:"",
        link_permanente:"",
        status_venda:"",
        status_combo:"",
        subtitulo:"",
        tipo_grupo:"",
        titulo:"",
        updated_at:"",
        url_img:"",        
        pixel_facebook: '',
        pixel_google: '',
        valor_pagamento_trimestral:"",
        valor_plano_anual:"",
        valor_plano_mensal:"",
        valor_plano_semestral:"",
        valor_plano_unico:"",
    }
]
}

export const produtosReducer = (state: produtosType, action: reducerActionType) => {
    switch(action.type){
        case 'PRODUTOS':   
        return {...state, produtos: action.payload.produtos};                                     
        break;                 
    }

    return state;   
}