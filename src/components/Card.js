import styled from "styled-components";

const CardContainer = styled.div`
  background: ${(props) => props.bg || "#fff"};
  color: ${(props) => props.color || "#000"};
  padding: 20px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
`;

export default function Card({ title, amount, bg, color }) {
  return (
    <CardContainer bg={bg} color={color}>
      <h3>{title}</h3>
      <h2>${amount}</h2>
    </CardContainer>
  );
}
