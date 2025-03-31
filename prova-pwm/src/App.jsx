import "./App.css"; 
import minhaFoto from "./assets/minha_foto.jpg"; 
import SqlLogo from "./assets/mysql-logo.png";
import PythonLogo from"./assets/python-logo.png";
import JsLogo from "./assets/JavaScript-logo.png"

function App() {
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
        front-end, além de conhecimentos básicos na área de banco de dados. Me
        interesso pela área de programação e tecnologia desde criança, aspirando ser um desenvolvedor de software desde então. Busco sempre mais experiência e conhecimento para atingir meus objetivos.
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
          <img src = {JsLogo} alt='Logo Js'>
          </img>
        </div>
      </div>
    </>
  );
}

export default App;
