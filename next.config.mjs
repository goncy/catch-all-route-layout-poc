/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/vercel/monitoring',
        permanent: false,
      },
    ];
  }
};

export default nextConfig;
