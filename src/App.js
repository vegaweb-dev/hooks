import logo from './logo.svg';
import Componente from './components/Componente';
import OtroComponente from './components/OtroComponente';
import State from './components/State';
import RenderizadoElementos from './components/RenderizadoElementos';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
        <Componente></Componente>
        <hr/>
        <OtroComponente /*cadena='Im a string'*/ otroString='mira soy otro string que muestra un arreglo que me concateno con el siguiente arreglo:' numero={23} booleano={true} array={[3,6,7,8,0]} objeto={{enunciado:'lo siguiente son elementos de un objeto creado en un componente: '  , nombre:'carlos' , apellido:'vega', email:'carlosjuniorrvega@hotmail.com'}}></OtroComponente>
        <hr/>
        <hr/>
        <State></State>
        <hr/>



        <hr/>
        <RenderizadoElementos></RenderizadoElementos>
        <hr/>

        </section>
      </header>
      
    </div>
  );
}

export default App;
