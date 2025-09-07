import './styles.css'

export default function Filtros(){
    function BotaoFiltro({children}){
        return(
            <button className='btn-filtro' >{children}</button>
        )
    }
    return(
        <div>
            <BotaoFiltro>Front-end</BotaoFiltro>
            <BotaoFiltro>React</BotaoFiltro>
            <BotaoFiltro>Acessibilidade</BotaoFiltro>
        </div>
    )
}