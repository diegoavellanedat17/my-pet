import {
  HeroSection,
  HeroContent,
  HeroButton,
  HeroImageWrapper,
} from '@/styles/Hero.styles';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <h1>Welcome to My Pet</h1>
        <p>Your pet&apos;s management system.</p>
        <Link href="/login" passHref>
          <HeroButton>Get Started</HeroButton>
        </Link>
        <Link href="/register" passHref>
          <HeroButton>Register</HeroButton>
        </Link>
      </HeroContent>
      <HeroImageWrapper>
        <Image
          src="/dog.png"
          alt="Hero Image"
          layout="responsive"
          width={500}
          height={500}
        />
      </HeroImageWrapper>
    </HeroSection>
  );
}
