import { reducerActionType } from "../types/reducerActinTypes";

export type vendasType = {
    vendas: [{
        id: string, 
        id_vendedor: string, 
        id_comprador: string, 
        id_cliente_pagamento: string, 
        id_transacao: string, 
        id_chat: string, 
        telefone: string,
        codigo_compra: string,
        nome_comprador: string,
        email: string,
        status: string,
        tipo_produto: string,
        valor_bruto: string, 
        valor_taxa: string, 
        valor_liquido: string, 
        titulo: string,
        subtitulo: string,
        quantidade_produto: string,
        quantidade_parcelas: string,
        metodo_pagamento: string,
        data_expiracao: string,
        codigo_pix: string, 
        link_boleto: string, 
        codigo_boleto: string, 
        vencimento_boleto: string,
        recorrente: string,
        data_vencimento: string,
        created_at: string, 
        updated_at: string       
    }],
}

export const vendasInitialState: vendasType = {
    vendas: [{ 
        id: '', 
        id_vendedor: '', 
        id_comprador: '', 
        id_cliente_pagamento: '', 
        id_transacao: '', 
        id_chat: '', 
        telefone: '',
        codigo_compra: '',
        nome_comprador: '',
        email: '',
        status: '',
        tipo_produto: '',
        valor_bruto: '', 
        valor_taxa: '', 
        valor_liquido: '', 
        titulo: '',
        subtitulo: '',
        quantidade_produto: '',
        quantidade_parcelas: '',
        metodo_pagamento: '',
        data_expiracao: '',
        codigo_pix: '', 
        link_boleto: '', 
        codigo_boleto: '', 
        vencimento_boleto: '',
        recorrente: '',
        data_vencimento: '',
        created_at: '', 
        updated_at: ''
    }],
}

export const vendasReducer = (state: vendasType, action: reducerActionType) => {

    switch(action.type){
        case 'VENDAS':   
        return {...state, vendas: action.payload.vendas};                                     
        break;                 
    }

    return state;
   
}