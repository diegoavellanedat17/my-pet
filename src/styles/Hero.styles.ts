import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(
    90deg,
    rgba(113, 140, 136, 1) 0%,
    rgba(94, 120, 117, 1) 100%
  );
  min-height: 100vh;

  ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column; /* Align content vertically */
  }

  ${(props) => props.theme.breakpoints.md} {
    flex-direction: row; /* Align content vertically */
  }
`;

export const HeroContent = styled.div`
  max-width: 600px;
  color: ${(props) => props.theme.colors.text};

  h1 {
    font-size: 6rem;
    color: ${(props) => props.theme.colors.light_text};
  }

  p {
    font-size: 1.25rem;
    margin: 1rem 0;
  }

  ${(props) => props.theme.breakpoints.sm} {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const HeroImageWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;

  ${(props) => props.theme.breakpoints.sm} {
    width: 180%;
    max-width: 200px;
  }

  ${(props) => props.theme.breakpoints.md} {
    max-width: 500px;
  }
`;
export const HeroButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  ${(props) => props.theme.breakpoints.sm} {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;
