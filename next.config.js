/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["gasa1296.pythonanywhere.com"],
  },
};

const withTM = require("next-transpile-modules")([
  "@mercadopago/sdk-react", // insert the name of the package here
]);

module.exports = withTM(nextConfig);
