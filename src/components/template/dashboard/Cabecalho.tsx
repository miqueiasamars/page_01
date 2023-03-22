import { useContext } from "react"
import { Context } from "../../../data/contexts/Context"

export default function Cabecalho() {  
    
    const {state} = useContext(Context)

    return (
                  
        <div className={`flex flex-col justify-items-center items-end px-6 py-4`}>           
            <div>
            <p>Ola,</p>
            <p>{state.user.name}</p>
            </div>
        </div>
    
    )
}