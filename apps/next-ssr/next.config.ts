import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	basePath: '/next-ssr',
	output: 'standalone'
}

export default nextConfig
