/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

// 관리자 페이지 직접 접근 제한
/* module.exports = {
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/admin-user',
        destination: '/',
        permanent: true,
      },
      {
        source: '/admin-posts',
        destination: '/',
        permanent: true,
      },
    ];
  },
}; */
