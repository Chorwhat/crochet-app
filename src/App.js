import './App.css';
import Stitch from './components/Stitch';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <Row rowInfo={['sc','sc','sc','sc','sc','sc']}/>
      <Row rowInfo={['inc','inc','inc','inc','inc','inc']}/>
    </div>
  );
}

export default App;
