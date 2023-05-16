import { BrowserRouter, Route, Routes, Link as RouterLink}
from "react-router-dom";
import CadastrarMedicos from "./componentes/CadastrarMedicos";
import AgendarConsultas from "./componentes/AgendarConsultas";
import ListarConsultas from "./componentes/ListarConsultas";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/cadastrar" element={<CadastrarMedicos />} />
            <Route path="/agendar" element={<AgendarConsultas />} />
            <Route path="/listar" element={<ListarConsultas />} />
        </Routes>
    </BrowserRouter>
    );
}


export default App;

// yarn create vite consultorio -- template react-ts

