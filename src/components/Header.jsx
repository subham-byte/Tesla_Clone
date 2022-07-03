/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {

  const [BurgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=> setBurgerStatus(true)}/>
        <BurgerNav show = {BurgerStatus}>
          <CloseWrapper>

          <CustomClose onClick={()=> setBurgerStatus(false)}/>
          </CloseWrapper>
          <li>
            <a href="#">Exixting Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadaster</a>
          </li>
          <li>
            <a href="#">Exixting Inventory</a>
          </li>
          <li>
            <a href="#">Exixting Inventory</a>
          </li>
          <li>
            <a href="#">Exixting Inventory</a>
          </li>
        </BurgerNav>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  /* width: 100%; */
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex: 1; */

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 250px;
  background: white;
  /* z-index: 100; */
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  a {
    font-weight: 600;
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: flex-end;
`