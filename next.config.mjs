/** @type {import('next').NextConfig} */
const nextConfig = {


    module: { rules: [ { test: /\.svg$/, use: ['@svgr/webpack'], }, ], }
};


// const nextConfig = {
//   basePath:"/jasper-supplies",
//     images: { 
//       loader:"imgix",
//         path: "/",

//       },
//     module: { rules: [ { test: /\.svg$/, use: ['@svgr/webpack'], }, ], }
// };


export default nextConfig;
