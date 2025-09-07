import './App.css'
import BarraDePesquisa from './componentes/barraDePesquisa'
import Cards from './componentes/cards'
import Filtros from './componentes/filtros'
import Ordenacao from './componentes/ordenacao'
import Sidebar from './componentes/sideBar'

function App() {

  return (
    <div className='container'>
      <Sidebar/>
      <div className='container-pesquisa'>
        <BarraDePesquisa />
        <Filtros />
        <div className='container-ordenacao'>
          <Ordenacao classe='btn-ordenacao-ativa'>Recentes</Ordenacao>
          <Ordenacao classe='btn-ordenacao'>Recentes</Ordenacao>
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default App
