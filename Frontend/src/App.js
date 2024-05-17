import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Componentes de layout   */
import Navbar from './Páginas/Layout/Navbar';
import Message from "./Páginas/Layout/Message";
import Container from "./Páginas/Layout/Container";
import Footer from "./Páginas/Layout/Footer";

/*Modelo de email para teste */
import ModeloEmail from "./ModeloEmail/ModelodeEmail.jsx"; 

/* Páginas   */
import Home from "./Páginas/Home";
import Login from "./Páginas/Login/Login.jsx";
import Register from "./Páginas/Register/Register.jsx";
import Profile from "./Páginas/User/Profile";

import CriarOrcamento from "./Páginas/Orcamento/CriarOrcamento";

import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/orc/novoorc" element={<CriarOrcamento />} />
            <Route path="/orc/modeloemail" element={<ModeloEmail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
