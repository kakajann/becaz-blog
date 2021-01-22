module.exports = {
  sassOptions: {
    includePaths: ['./public/stylesheet'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.becaz.com/:path*',
      },
    ]
  },
}
