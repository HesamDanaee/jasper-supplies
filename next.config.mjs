/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:"/",
    images: {
        path: "/",
      },
    module: { rules: [ { test: /\.svg$/, use: ['@svgr/webpack'], }, ], }
};

export default nextConfig;
