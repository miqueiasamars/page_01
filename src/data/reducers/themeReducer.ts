import { reducerActionType } from "../types/reducerActinTypes"

export type ThemeType = {    
    menu: string;   
}

export const themeInitialState: ThemeType = {      
    menu: '0',    
}

export const themeReducer = (state: ThemeType, action: reducerActionType) => {

    switch(action.type){               
        case 'MENU':   
        return {...state, menu: action.payload.menu};   
        break;
    }

    return state;
}