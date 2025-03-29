import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background: #34495e;
  color: white;
  padding: 10px;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  color: ${(props) => (props.negative ? "red" : "black")};
`;

export default function TransactionsTable() {
  const transactions = [
    { date: "20/03/2025", description: "Aluguel", category: "Habitação", amount: -1200 },
    { date: "18/03/2025", description: "Supermercado", category: "Alimentação", amount: -150 },
    { date: "15/03/2025", description: "Salário", category: "Receita", amount: 5000 }
  ];

  return (
    <Table>
      <thead>
        <tr>
          <Th>Data</Th>
          <Th>Descrição</Th>
          <Th>Categoria</Th>
          <Th>Valor</Th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t, index) => (
          <tr key={index}>
            <Td>{t.date}</Td>
            <Td>{t.description}</Td>
            <Td>{t.category}</Td>
            <Td negative={t.amount < 0}>${t.amount}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
