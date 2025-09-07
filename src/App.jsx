import './App.css'
import BarraDePesquisa from './componentes/barraDePesquisa'
import Sidebar from './componentes/sideBar'

function App() {

  return (
    <div className='container-navegacao'>
      <Sidebar/>
      <BarraDePesquisa />
    </div>
  )
}

export default App
