import type { NextConfig } from "next";

const withYAML = require('next-yaml')
module.exports = withYAML()

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
