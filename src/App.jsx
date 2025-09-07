import './App.css'
import BarraDePesquisa from './componentes/barraDePesquisa'
import Filtros from './componentes/filtros'
import Sidebar from './componentes/sideBar'

function App() {

  return (
    <div className='container'>
      <Sidebar/>
      <div className='container-pesquisa'>
        <BarraDePesquisa />
        <Filtros />
      </div>
    </div>
  )
}

export default App
