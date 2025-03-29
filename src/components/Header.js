import { FaCircleUser } from "react-icons/fa6";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #ecf0f1;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <RiMoneyDollarBoxLine className="custom-icon"/>
      <h2>Controle Financeiro</h2>
      <FaCircleUser className="custom-icon-link"/>
      <span>Osman</span>
    </HeaderContainer>
  );
}
