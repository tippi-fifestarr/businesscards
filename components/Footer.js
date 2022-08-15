import styled from "styled-components";

const FooterSection = styled.div`
    background: #000;
    color: #fff;
    height: 60px;
    display: flex;
    justify-content: centerl
    align-items: center;
    `;

const Footer = () => {
  return (
    <FooterSection>
      <p>2022 Creative Deuce!</p>
    </FooterSection>
  );
};

export default Footer;
