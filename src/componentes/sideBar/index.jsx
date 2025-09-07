import Logo from './assets/Logo.png'
import Feed from './assets/feed.svg'
import Info from './assets/info.svg'
import Perfil from './assets/perfil.svg'
import Logout from './assets/logout.svg'
import './style.css'

export default function Sidebar(){

        function LinkSideBar({icone, children, classe}){

            return(   
            <li>
                <a href="#" ><img src={icone} alt="Ícone de Feed" /><span className={classe}>{children}</span></a>
            </li>
                )
            }

        
        function Botao({children}){
            return(
                <button className='botao__sidebar-publicar'>{children}</button>
            )
        }

   return(
    <aside>
        <img src={Logo} alt="Logo do CodeConnect" />

        <ul className='lista-sidebar'>
            <li ><Botao >Publicar</Botao></li>
           <LinkSideBar classe='link-sidebar-ativo' icone={Feed}>Feed</LinkSideBar>
           
            <LinkSideBar classe='link-sidebar' icone={Perfil}>Perfil</LinkSideBar>

            <LinkSideBar classe='link-sidebar' icone={Info}>Sobre nós</LinkSideBar>

            <LinkSideBar classe='link-sidebar' icone={Logout}>Logout</LinkSideBar>
        </ul>
    </aside>

   )

}