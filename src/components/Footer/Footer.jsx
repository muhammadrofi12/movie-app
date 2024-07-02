import styled from "styled-components";

const Container = styled.div`
  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;
  margin-top: 100px;
`;

const FooterWrapper = styled.footer``;

const FooterTitle = styled.h2`
  margin-bottom: 1rem;
`;

const FooterAuthor = styled.p`
  margin-bottom: 1rem;
`;

function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <FooterTitle>Movie App</FooterTitle>
        <FooterAuthor>Created by Rofz</FooterAuthor>
      </FooterWrapper>
    </Container>
  );
}

export default Footer;
