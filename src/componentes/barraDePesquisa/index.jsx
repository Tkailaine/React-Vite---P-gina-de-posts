import './styles.css'

export default function BarraDePesquisa(){

    function InputPesquisa({placeholder, classe}){
        return(
            <input type="search" placeholder={placeholder} className={classe} />
        )
    }
    return(
        <InputPesquisa placeholder='Digite o que você procura' classe='barra-pesquisa' />
    )
}