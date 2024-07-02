import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLeft = styled.div`
  flex-grow: 1;
`;

const NavbarBrand = styled.h2`
  font-family: "Poppins-Light", sans-serif;
  font-size: 36px;
  margin: 0;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding-left: 0;
    font-size: 24px;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #4361ee;
    width: 100%;
    flex-direction: column;
    display: ${(props) => (props.active ? "flex" : "none")};
    transition: all 0.3s ease-in-out;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;

const NavbarItem = styled.li`
  opacity: 0.5;
  margin-right: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 1;
    color: #fff;
  }

  @media (min-width: 768px) {
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 1rem 0;
  }
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 2px;
    background-color: #fff;
    margin: 4px;
  }
`;

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <Container>
      <NavbarWrapper>
        <NavbarLeft>
          <NavbarBrand>Movie App</NavbarBrand>
        </NavbarLeft>
        <Hamburger onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </Hamburger>
        <NavbarRight active={menuActive}>
          <NavbarList>
            <NavbarItem>
              <NavbarLink to="/" onClick={toggleMenu}>
                Home
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="/movie/create" onClick={toggleMenu}>
                Add Movie
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="/movie/popular" onClick={toggleMenu}>
                Popular
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="/movie/now" onClick={toggleMenu}>
                Now Playing
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="/movie/top" onClick={toggleMenu}>
                Top Rated
              </NavbarLink>
            </NavbarItem>
          </NavbarList>
        </NavbarRight>
      </NavbarWrapper>
    </Container>
  );
}

export default Navbar;
