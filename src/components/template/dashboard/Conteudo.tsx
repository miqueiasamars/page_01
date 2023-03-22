interface ConteudoProps {
    children?: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`mb-10`}>
            {props.children}
        </div>
    )
}