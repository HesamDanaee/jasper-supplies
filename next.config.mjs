/** @type {import('next').NextConfig} */
const nextConfig = {
 
    images: {

      loader:"akamai",
        path: "/",

      },
    module: { rules: [ { test: /\.svg$/, use: ['@svgr/webpack'], }, ], }
};

export default nextConfig;
