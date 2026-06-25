
import createNextIntlPlugin from "next-intl/plugin";

// Point the plugin at the existing request config (next-intl v4 otherwise
// expects ./src/i18n/request.ts).
const withNextPlugin = createNextIntlPlugin("./src/i18n.ts")

/** @type {import('next').NextConfig} */
const nextConfig = {}


export default withNextPlugin(nextConfig)

// import type { NextConfig } from 'next'
 
// const nextConfig: NextConfig = {
//   /* config options here */
// }
 
// export default nextConfig