import {useState} from 'react'
import './styles.css'

export default function BarraDePesquisa(){

    function InputPesquisa({placeholder, classe}){
        const [termoPesquisa, setPesquisa] = useState('')
        return(
            <input type="search" placeholder={placeholder} className={classe} value={termoPesquisa} setValor={setPesquisa} />
        )
    }
    return(
        <InputPesquisa placeholder='Digite o que você procura' classe='barra-pesquisa' />
    )
}