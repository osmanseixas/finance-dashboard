import styled from "styled-components";
import Header from "../components/Header";
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
        <Card titulo="Saldo" valor={2000} corFundo="gold" corLetra="black" />
        <Card titulo="Receitas" valor={3000.5} corFundo="green" corLetra="white" />
        <Card titulo="Despesas" valor={4500.87} corFundo="red" corLetra="white" />
        <PieChartComponent />
        <BarChartComponent />
        <TransactionsTable />
      </Content>
    </Container>
  );
}
