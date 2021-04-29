import './App.css';
import './Generator';
// import './ClickScript';

function App() {
  return (
    <div className="App">
      <header className="container">
        <header className="homepage">
          <div className="topbar"></div>


          <div className="img-animal-wrapper">
            <img id="myImg" src="./img/Hehehe.gif" alt="Animalzinho"></img>
          </div>

        </header>
        <header className="midpage">
          <h1>AnmZ</h1>
          <div className="acabaxi">Oi</div>
        </header>
        <div className="line-footpage"></div>
        <header className="footpage">
          <a id="gh" href="https://github.com/arthemioKalil/Anmz-F5"><li>Github</li></a>
          <a id="cr" href="https://twitter.com/Artenks"><li>Criado por Artenks 💚</li></a>
          <a id="ct" href="https://twitter.com/Artenks"><li>Contato</li></a>
          <script src="./ClickScript"></script>
        </header>

      </header>

    </div>
  );
}

export default App;
