import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Categories from "./pages/Categories";
import Configurations from "./pages/Configurations";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppContainer>
      <Sidebar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/transacoes" element={<Transactions />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/configuracoes" element={<Configurations />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
