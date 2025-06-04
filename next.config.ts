import type { NextConfig } from "next";
import { env } from "process";

module.exports = {
  env: {
    DATABASE_URL: env.DATABASE_URL,
    MOCK_BASE_URL: env.MOCK_BASE_URL
  }
}
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
