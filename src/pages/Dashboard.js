import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import TransactionsTable from "../components/TransactionsTable";
import PieChartComponent from "../components/PieChartComponent";
import BarChartComponent from "../components/BarChartComponent";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <Header />
        <Card title="Saldo" amount="2.000,00" bg="#27ae60" color="white" />
        <Card title="Receitas" amount="3.000,00" bg="green" color="white" />
        <Card title="Despesas" amount="4.500,00" bg="red" color="white" />
        <PieChartComponent />
        <BarChartComponent />
        <TransactionsTable />
      </Content>
    </Container>
  );
}
