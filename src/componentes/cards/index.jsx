import { useState } from 'react';
import './styles.css'

function CapaCard({ nomeImagem }) {
  return (
    <div className="card__imagem">
      <img src={`.assets/${nomeImagem}.jpeg`} alt="imagem do post" />
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
      <button onClick={onClick}>
        <img src={`.assets/${nomeIcone}.svg`} alt={`icone ${nomeIcone}`} />
      </button>
      {children}
    </li>
  );
}


export default function Cards() {
  const [contCode, setContCode] = useState(0);

  return (
    <article className="card">
      <CapaCard nomeImagem="capa" />
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <TituloCard>Título do post</TituloCard>
          <ResumoCard>Resumo do post</ResumoCard>
        </div>
      </div>

      <div className="conteudo_rodape">
        <ul>
          <BotaoInteracaoCard nomeIcone="code" onClick={() => setContCode(contCode + 1)}>
            <p>{contCode}</p>
          </BotaoInteracaoCard>
        </ul>
      </div>

     

    </article>
  );
}
