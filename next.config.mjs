/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_USER_POOL_ID: process.env.NEXT_PUBLIC_USER_POOL_ID,
    NEXT_PUBLIC_USER_POOL_CLIENT_ID:
      process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
    NEXT_PUBLIC_IDENTITY_POOL_ID: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
