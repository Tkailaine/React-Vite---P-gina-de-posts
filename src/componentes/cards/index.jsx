
import Code from './assets/code.svg'
import Chat from './assetes/chat.svg'
import Share from './assets/share.svg'
import Icone from './assets/user.svg'

export default function Cards(){

    function CapaCard({nomeImagem}){
        return(
              <div className="card__imagem">
                <img src={`.assets/${nomeImagem}.jpeg`} alt="imagem do post" />
            </div>
        )
    function TituloCard({children}){
        return(
            <h3>{children}</h3>
        )
    }

     function ResumoCard({children}){
        return(
            <p>{children}</p>
        )
    }

    }

    return (
        <article className="card"> 
          <CapaCard nomeImagem="capa" />
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                   <TituloCard>Título do post</TituloCard>
                    <ResumoCard>Resumo do post</ResumoCard>
                </div>
            </div>
        
        <div className='conteudo_rodape'>
            <ul>
                <li>
                    <img src={Code} alt="códigos" />
                    100
                </li>
                <li>
                    <img src={Share} alt="Compartilhar" />
                    12
                </li>

                <li>
                    <img src={Chat} alt="Comentários" />
                    10
                </li>
            </ul>

            <div className='rodape__usuario'>
                <img src={Icone} alt="imagem do usuário" />
                @user
            </div>
        </div>
        </article>
    )
}