import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.text};
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
  ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.5rem;
  }
  ${(props) => props.theme.breakpoints.md} {
    font-size: 2.75rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.25rem;
  }
  ${(props) => props.theme.breakpoints.md} {
    font-size: 1.4rem;
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const AboutSection = styled.section`
  text-align: center;
  margin-top: 2rem;
`;

export const AboutTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.75rem;
  }
  ${(props) => props.theme.breakpoints.md} {
    font-size: 1.9rem;
  }
`;

export const AboutDescription = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.text};
  ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
  ${(props) => props.theme.breakpoints.md} {
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;
