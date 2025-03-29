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
      <h2>Finance Tracker</h2>
      <span>👤 User</span>
    </HeaderContainer>
  );
}
