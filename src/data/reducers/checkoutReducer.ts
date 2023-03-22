import { reducerActionType } from "../types/reducerActinTypes";

export type checkoutType = {
    checkout: [{
        id: string, 
        id_produto: string,
        id_vendedor: string,
        valor_unico: string,
        valor_mensal: string,
        valor_trimestral: string,
        valor_semestral: string,
        valor_anual: string,
        pixel_facebook: string,
        pixel_google: string,
        updated_at: string,
        created_at: string,
    }],
}

export const checkoutInitialState: checkoutType = {
    checkout: [{ 
        id: '', 
        id_produto: '',
        id_vendedor: '',
        valor_unico: '',
        valor_mensal: '',
        valor_trimestral: '',
        valor_semestral: '',
        valor_anual: '',
        pixel_facebook: '',
        pixel_google: '',
        updated_at: '',
        created_at: '',
    }],
}

export const checkoutReducer = (state: checkoutType, action: reducerActionType) => {

    switch(action.type){
        case 'CHECKOUT':   
        return {...state, checkout: action.payload.checkout};                                     
        break;                 
    }

    return state;
   
}