import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { HeroSection, HeroImageWrapper, PrimaryButton } from '@/styles';

export default function Hero() {
  return (
    <HeroSection className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="hero-content">
              <h1>Welcome to My Pet</h1>
              <p>Your pet&apos;s management system.</p>
              <div className="buttons-wrapper">
                <Link href="/login" passHref>
                  <PrimaryButton className="mr-2">Get Started</PrimaryButton>
                </Link>
                <Link href="/register" passHref>
                  <PrimaryButton>Register</PrimaryButton>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <HeroImageWrapper>
              <Image
                src="/dog.png"
                alt="Hero Image"
                layout="responsive"
                width={50}
                height={50}
              />
            </HeroImageWrapper>
          </Col>
        </Row>
      </Container>
    </HeroSection>
  );
}
