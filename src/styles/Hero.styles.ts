import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(113, 140, 136, 1) 0%,
    rgba(94, 120, 117, 1) 100%
  );
  min-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;

  ${(props) => props.theme.breakpoints.sm} {
  }

  ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
  }
`;

export const HeroContent = styled.div`
  max-width: 400px;
  width: 380px;
  color: ${(props) => props.theme.colors.text};

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.light_text};
  }

  p {
    font-size: 1.25rem;
    margin: 1rem 0;
    color: ${(props) => props.theme.colors.light_text};
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
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;

  ${(props) => props.theme.breakpoints.sm} {
    width: 180%;
    max-width: 500px;
  }

  ${(props) => props.theme.breakpoints.md} {
    max-width: 500px;
  }
`;
export const HeroButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
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

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.sm} {
    flex-direction: row;
    gap: 1rem;
  }
`;
