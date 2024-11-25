/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       bcrypt: false,
  //     };
  //   }
  //   return config;
  // },
  experimental: {
    turbo: {
      // ...
    },
  },
};

export default config;
