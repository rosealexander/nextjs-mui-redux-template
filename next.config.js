module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'archive.org']
  },
  experimental: {
    images: {
      unoptimized: true,
    }
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
