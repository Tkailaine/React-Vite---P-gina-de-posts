import {useState} from 'react'
import './styles.css'

export default function BarraDePesquisa(){

    function InputPesquisa({placeholder, classe}){
        const [termoPesquisa, setTermoPesquisa] = useState('')
        console.log(termoPesquisa)
        return(
            <input type="search" placeholder={placeholder} className={classe} value={termoPesquisa} onChange={(evento) => setTermoPesquisa(evento.target.value)} />
        )
    }
    return(
        <InputPesquisa placeholder='Digite o que você procura' classe='barra-pesquisa' />
    )
}