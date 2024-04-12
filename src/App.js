import './App.css';
import ContadorLikes  from'./Components/ContadorLikes'
import NombreUsuario from './Components/NombreUsuario';
import Modal from './Components/Modal';


function App() {
  return (
    <div className="App">
      <ContadorLikes/>
      <NombreUsuario/>
      <Modal/>
    </div>
  );
}

export default App;
