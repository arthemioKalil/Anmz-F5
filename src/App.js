import './App.css';
import './Generator';
import './ActionScript';


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="homepage">
          <div className="line-topbar"></div>

          <div className="img-animal-wrapper">
            <img id="myImg" src="./img/Hehehe.gif" alt="Animalzinho"></img>
          </div>
          <div className="logo-name" id="l-name">
            <h1>AnmZ</h1>
          </div>
        </header>

        <header className="midpage">
          <div className="line-midpage"></div>
          <ul>
            <a href="https://github.com/arthemioKalil/Anmz-F5">
              <li id="gh" >Github</li>
            </a>
            <a href="https://twitter.com/Artenks"> <img src="./img/logo.png"></img> </a>
            <a href="#anc1" >
              <li id="ct">Contato</li>
            </a>
          </ul>

        </header>
        <header className="footpage">
          <div id="anc1" className="contact">
            <h2>Adicionar o seu AnmZ</h2>
            <p>
              Para adicionar uma foto do seu animalzinho e apenas uma por animalzinho é simples, apenas me enviar uma imagem direcionada ao Imgur pelo Twitter que eu já irei reconhecer e posteriormente adiciona-lo.
              O AnmZ foi feito somente por mim no intuito de aprender mais sobre programação junto de animar o dia de alguns com fotos fofas. Por esse motivo, peço paciência se houver algum problema com o site.
              Caso tenha uma imagem nova a ser adicionada Toda Quinta-Feira será adicionado uma onda de AnmZ.
            </p>
          </div>

        </header>

      </div>
    </div>
  );
}

export default App;
