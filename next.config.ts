import type { NextConfig } from "next";
import { env } from "process";

module.exports = {
  env: {
    DATABASE_URL: env.DATABASE_URL
  }
}
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
