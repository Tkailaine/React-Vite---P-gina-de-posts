import { useEffect, useState } from 'react'
import './App.css'
import BarraDePesquisa from './componentes/barraDePesquisa'
import Cards from './componentes/cards'
import Filtros from './componentes/filtros'
import Ordenacao from './componentes/ordenacao'
import Sidebar from './componentes/sideBar'

function App() {
  const [dados, setDados] = useState([])
 useEffect(() => {
  fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
  .then(resposta => resposta.json())
  .then(dados => setDados(dados))
 }, [])

 console.log(dados)

  return (
    <div className='container'>
      <Sidebar/>
      <div className='container-pesquisa'>
        <BarraDePesquisa />
        <Filtros />
        <div className='container-ordenacao'>
          <Ordenacao classe='btn-ordenacao-ativa'>Recentes</Ordenacao>
          <Ordenacao classe='btn-ordenacao'>Recentes</Ordenacao>
         
        </div> 
       <ul className='lista-cards'>
          {dados ? dados.map((item, index)=> (
            <li key={index}>
              <Cards id={item.id} 
              imagemUrl={item.imagem_capa}
              titulo={item.titulo} 
              resumo={item.resumo}
              usuario={item.usuario}
              />
            </li>
          )) : null}  
       </ul>

      </div>
    </div>
  )
}

export default App
