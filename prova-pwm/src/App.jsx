import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import minhaFoto from "./assets/minha_foto.jpg";
import SqlLogo from "./assets/mysql-logo.png";
import PythonLogo from "./assets/python-logo.png";
import JsLogo from "./assets/JavaScript-logo.png";
import emailIcon from "./assets/email-icon.png";
import githubIcon from "./assets/github-icon.png";
import Jogo from "./pages/Jogo";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Portfolio</h1>
      <div className="foto-minha">
        <img src={minhaFoto} alt="Foto minha" />
      </div>
      <h2 className="Sobre Mim">Sobre Mim</h2>
      <p className="sobre-mim">
        Me chamo Rondon Guilherme, tenho 20 anos e atualmente sou estudante do
        quinto período de Ciências da Computação pela Universidade Católica de
        Pernambuco (UNICAP). Possuo experiência em programação back-end e
        front-end, além de conhecimentos básicos na área de banco de dados.
        Tenho interesse em desenvolvimento de software como um todo e estou
        sempre em busca de aprimorar minhas habilidades técnicas por meio de
        projetos práticos, estudos contínuos e colaboração em equipe. Meu
        objetivo é me tornar um desenvolvedor de software completo, capaz de
        entregar soluções eficientes, criativas e escaláveis.Atualmente, venho
        me dedicando a projetos que envolvem tecnologias modernas e boas
        práticas de desenvolvimento, buscando sempre escrever código limpo,
        reutilizável e de fácil manutenção. Tenho familiaridade com ferramentas
        de versionamento como Git, metodologias ágeis e estou constantemente
        explorando novas linguagens, frameworks e arquiteturas que me ajudem a
        evoluir como desenvolvedor. Acredito que a tecnologia tem o poder de
        transformar realidades e, por isso, me empenho em aprender e contribuir
        de forma significativa em cada projeto que participo.
      </p>

      <h2 className="Competencias">Competências</h2>
      <div className="Logos-container">
        <div className="Logo-sql">
          <img src={SqlLogo} alt="Logo SQL" />
        </div>
        <div className="Logo-python">
          <img src={PythonLogo} alt="Logo Python" />
        </div>
        <div className="Logo-Js">
          <img src={JsLogo} alt="Logo Js" />
        </div>
      </div>

      <h2 className="Contato">Contato</h2>
      <div className="Icones-Contato-Container">
        <a href="mailto:rondongvm@gmail.com" target="_blank">
          <img src={emailIcon} alt="Ícone do Email" className="contato-icon" />
        </a>
        <a href="https://github.com/RondonGVM" target="_blank">
          <img
            src={githubIcon}
            alt="Ícone do GitHub"
            className="contato-icon"
          />
        </a>
      </div>
      <h2 className="Jogar">Bulls and Cows</h2>
      <div className="game-button-container">
        <button onClick={() => navigate("/Jogo")}>Jogar Bulls and Cows</button>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jogo" element={<Jogo />} />
      </Routes>
    </Router>
  );
}

export default App;
