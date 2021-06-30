module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`
      },
      { source: '/a/:path*', destination: 'https://api.mixpanel.com/:path*' }
    ];
  }
};
