import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  height: 80px;
  background: #8768f7;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>Mavnar!</StyledLink>
        </Link>
      </div>
      <div>
        <div>
          <Link href="/" passHref>
            <StyledLink>Home</StyledLink>
          </Link>
        </div>
        <div>
          <Link href="/about" passHref>
            <StyledLink>About</StyledLink>
          </Link>
        </div>
        <div>
          <Link href="/tips" passHref>
            <StyledLink>Tips!</StyledLink>
          </Link>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
