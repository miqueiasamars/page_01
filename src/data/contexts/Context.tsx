import { createContext, useReducer, useEffect } from "react";
import { UserType, userInitialState, userReducer } from "../../data/reducers/userReducer";
import { vendasType, vendasInitialState, vendasReducer } from "../../data/reducers/vendasReducer";
import { reducerActionType } from "../../data/types/reducerActinTypes";
import { themeInitialState, themeReducer, ThemeType } from "../reducers/themeReducer";
import { membrosInitialState, membrosReducer, membrosType } from "../reducers/membrosReducer";
import { produtosType, produtosInitialState, produtosReducer } from "../reducers/produtosReducer";
import { checkoutInitialState, checkoutReducer, checkoutType } from "../reducers/checkoutReducer";
import { comprasInitialState, comprasReducer, comprasType } from "../reducers/comprasReducer";

interface Props {
    children: React.ReactNode;
}

type initialStateType = {
    [x: string]: any;
    user: UserType;
    vendas: vendasType;
    theme: ThemeType;
    membros: membrosType;
    produtos: produtosType;
    checkout: checkoutType;
    compras: comprasType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    user: userInitialState,
    vendas: vendasInitialState,
    theme: themeInitialState,
    membros: membrosInitialState,
    produtos: produtosInitialState,
    checkout: checkoutInitialState,
    compras: comprasInitialState,
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    vendas: vendasReducer(state.vendas, action),
    theme: themeReducer(state.theme, action),
    membros: membrosReducer(state.membros, action),
    produtos: produtosReducer(state.produtos, action),
    checkout: checkoutReducer(state.checkout, action),
    compras: comprasReducer(state.compras, action),
})

export const ContextProvider: React.FC <Props> = ({ children }) => {
    
    const [state, dispatch] = useReducer(mainReducer, initialState);       

    return (
    <Context.Provider value={{state, dispatch}}>
        {children}
    </Context.Provider>
    )
}


