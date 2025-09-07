import { useState } from 'react';
import './styles.css';

function CapaCard({ nomeImagem }) {
  return (
    <div className="card__imagem">
      <img src={`${nomeImagem}`} alt={`imagem do post: ${nomeImagem}`} />
    </div>
  );
}

function TituloCard({ children }) {
  return <h3>{children}</h3>;
}

function ResumoCard({ children }) {
  return <p>{children}</p>;
}

function BotaoInteracaoCard({ nomeIcone, onClick, children }) {
  return (
    <li>
      <button className='btn-interacao' onClick={onClick}>
        <img src={`../../../public/assets/${nomeIcone}.svg`} alt={`icone ${nomeIcone}`} />
      </button>
      {children}
    </li>
  );
}

function HandleComentario(){
    return(
        alert("Adicionando comentário...")
    )
}

function HandleCompartilhar(){
    return(
        alert("Compartilhando...")
    )
}

function HandleCode(){
    return(
        alert("Copiando código...")
    )
}

function AutorUsuario({ nomeImagem, children }) {
  return (
    <div className='usuario_icone_nome'>
      <img src={`${nomeImagem}`} alt="imagem do usuário" />
      {children}
    </div>
  );
}

export default function Cards({imagemUrl,titulo,resumo, usuario}) {
  const [contCode, setContCode] = useState(0);
  const [contChat, setContChat] = useState(0);
  const [contShare, setContShare] = useState(0);

  return (
    <article className="card">

      <CapaCard nomeImagem={imagemUrl} />

      <div className="card__conteudo">
        <div className="conteudo__texto">
          <TituloCard>{titulo}</TituloCard>
          <ResumoCard>{resumo}</ResumoCard>
        </div>
      </div>

      <div className="conteudo__rodape">
        <div>
            <ul>
              <BotaoInteracaoCard nomeIcone="code" onClick={() => {setContCode(contCode + 1);
                HandleCode()}
              }>
                <p>{contCode}</p>
              </BotaoInteracaoCard>

              <BotaoInteracaoCard nomeIcone="chat" onClick={() => {setContChat(contChat + 1); HandleComentario()}}>
                <p>{contChat}</p>
              </BotaoInteracaoCard>

              <BotaoInteracaoCard nomeIcone='share' onClick={() => {setContShare(contShare + 1); HandleCompartilhar()}}>
                <p>{contShare}</p>
              </BotaoInteracaoCard>
            </ul>
        </div> 
        
        <div className="rodape__usuario">
            <AutorUsuario nomeImagem={usuario.imagem}>{usuario.nome}</AutorUsuario>
        </div>
      </div>

     
    </article>
  );
}
