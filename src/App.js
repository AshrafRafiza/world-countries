import './App.css';
// import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Country from './components/Country';

function App() {
  return (
    <div className="App bg-light min-vh-100">
      <Header />
      <div className="countries">
        <Country />
      </div>
    </div>
  );
}

export default App;
