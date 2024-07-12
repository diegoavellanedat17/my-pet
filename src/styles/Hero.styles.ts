import styled from 'styled-components';

export const HeroSection = styled.section`
  background: linear-gradient(
    180deg,
    rgba(113, 140, 136, 1) 0%,
    rgba(94, 120, 117, 1) 100%
  );
  height: 100vh;
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  max-width: 70%;
  justify-content: flex-end;
  height: auto;
  margin: 0 auto;

  @media (min-width: 992px) {
    max-width: 80%;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #f49814;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 40px;
  margin-right: 10px;
`;
