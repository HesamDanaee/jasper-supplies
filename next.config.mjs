/** @type {import('next').NextConfig} */
const nextConfig = {
    module: { rules: [ { test: /\.svg$/, use: ['@svgr/webpack'], }, ], }
};

export default nextConfig;
