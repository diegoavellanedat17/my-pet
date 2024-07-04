import {
  HeroSection,
  HeroContent,
  HeroButton,
  HeroImageWrapper,
  ButtonsWrapper,
} from '@/styles/Hero.styles';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <h1>Welcome to My Pet</h1>
        <p>Your pet&apos;s management system.</p>
        <ButtonsWrapper>
          <Link href="/login" passHref>
            <HeroButton>Get Started</HeroButton>
          </Link>
          <Link href="/register" passHref>
            <HeroButton>Register</HeroButton>
          </Link>
        </ButtonsWrapper>
      </HeroContent>
      <HeroImageWrapper>
        <Image
          src="/dog.png"
          alt="Hero Image"
          layout="responsive"
          width={50}
          height={50}
        />
      </HeroImageWrapper>
    </HeroSection>
  );
}
