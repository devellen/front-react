import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CadastroUsuario from "./pages/CadastrarUsuario";
import Home from "./pages/Home"
import CadastroContato from "./pages/CadastroContato"
import AlterarContato from "./pages/AlterarCadastro"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="cadastroUsuario" element={<CadastroUsuario />} />
        <Route path="home" element={<Home />} />
        <Route path="cadastroContato" element={<CadastroContato />} />
        <Route path="alterarContato/:id" element={<AlterarContato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
