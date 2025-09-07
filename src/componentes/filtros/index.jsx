import './styles.css'

export default function Filtros(){
    function BotaoFiltro({children}){
        return(
            <button className='btn-filtro' >{children}</button>
        )
    }
    
    function BotaoLimparPesquisa(){
        return(
            <button className='btn-limpar-pesquisa'>Limpar Pesquisa</button>
        )
    }
    return(
        <div>
            <div>
                <BotaoFiltro>Front-end</BotaoFiltro>
                <BotaoFiltro>React</BotaoFiltro>
                <BotaoFiltro>Acessibilidade</BotaoFiltro>
            </div>
            <BotaoLimparPesquisa/>
        </div>
    )
}