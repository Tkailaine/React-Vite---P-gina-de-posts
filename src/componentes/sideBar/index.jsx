import Logo from './assets/Logo.png'
import Feed from './assets/feed.svg'
import Info from './assets/info.svg'
import Perfil from './assets/perfil.svg'
import Logout from './assets/logout.svg'
import './style.css'

export default function Sidebar(){

        function LinkSideBar({icone, children}){

            return(   
            <li>
                <a href="#"><img src={icone} alt="Ícone de Feed" /><span>{children}</span></a>
            </li>
                )
            }

        
        function Botao({children}){
            return(
                <button>{children}</button>
            )
        }

   return(
    <aside>
        <img src={Logo} alt="Logo do CodeConnect" />

        <ul className='lista-sidebar'>
            <li><Botao />Publicar</li>
           <LinkSideBar icone={Feed}>Feed</LinkSideBar>
           
            <LinkSideBar icone={Perfil}>Perfil</LinkSideBar>

            <LinkSideBar icone={Info}>Sobre nós</LinkSideBar>

            <LinkSideBar icone={Logout}>Logout</LinkSideBar>
        </ul>
    </aside>

   )

}