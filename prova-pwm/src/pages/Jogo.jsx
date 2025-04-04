import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const gerarNumeroSecreto = () => {
  let numeros = new Set();
  while (numeros.size < 4) {
    numeros.add(Math.floor(Math.random() * 10));
  }
  return Array.from(numeros).join("");
};

const Jogo = () => {
  const [numeroSecreto, setNumeroSecreto] = useState(gerarNumeroSecreto());
  const [palpite, setPalpite] = useState("");
  const [historico, setHistorico] = useState([]);
  const [jogoEncerrado, setJogoEncerrado] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Número secreto:", numeroSecreto);
  }, [numeroSecreto]);

  const verificarPalpite = () => {
    if (palpite.length !== 4 || new Set(palpite).size !== 4) {
      alert("Digite um número de 4 dígitos únicos!");
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (palpite[i] === numeroSecreto[i]) {
        bulls++;
      } else if (numeroSecreto.includes(palpite[i])) {
        cows++;
      }
    }

    setHistorico([`${palpite} - Bulls: ${bulls}, Cows: ${cows}`, ...historico]);

    if (bulls === 4) {
      setMensagem("Parabéns! Você acertou o número!");
      setJogoEncerrado(true);
    }

    setPalpite("");
  };

  const desistir = () => {
    alert(`O número secreto era: ${numeroSecreto}`);
    setJogoEncerrado(true);
  };
  

  const jogarNovamente = () => {
    setNumeroSecreto(gerarNumeroSecreto());
    setPalpite("");
    setHistorico([]);
    setJogoEncerrado(false);
    setMensagem("");
  };

  return (
    <div className="game-container">
      <h1>Bulls and Cows</h1>

      {!jogoEncerrado && (
        <>
          <div className="input-container">
            <input
              type="text"
              value={palpite}
              onChange={(e) => setPalpite(e.target.value)}
              maxLength="4"
            />
          </div>
          <div className="buttons-container">
            <button className="botao" onClick={verificarPalpite}>
              Enviar Palpite
            </button>
            <button className="botao" onClick={desistir}>
              Desistir
            </button>
          </div>
        </>
      )}

      {jogoEncerrado && (
        <div>
          <h2>{mensagem}</h2>
          <button className="botao" onClick={jogarNovamente}>
            Jogar Novamente
          </button>
        </div>
      )}

      <h2>Histórico:</h2>
      <ul>
        {historico.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button className="botao voltar-home" onClick={() => navigate("/")}>
        Voltar para Home
      </button>
    </div>
  );
};

export default Jogo;
