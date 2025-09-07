import './styles.css'

export default function Filtros(){
    function BotaoFiltro({children}){
        return(
            <button className='btn-filtro' >{children}</button>
        )
    }
    
    function BotaoLimparTudo(){
        return(
            <button className='btn-limpar-pesquisa'>Limpar tudo</button>
        )
    }
    return(
        <div className='container-filtro'>
            <div className='containerBotoesFiltros'>
                <BotaoFiltro>Front-end</BotaoFiltro>
                <BotaoFiltro>React</BotaoFiltro>
                <BotaoFiltro>Acessibilidade</BotaoFiltro>
            </div>
            <BotaoLimparTudo/>
        </div>
    )
}