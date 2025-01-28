import type { Config } from '@react-router/dev/config';

export default {
  // Config options...
  // To enable SSR mode set this to `true`.
  // When enabling SSR mode, i18n must be configured to use a language detector on the server so that the
  // correct language is used for the initial render, else hydration will fail
  ssr: false,
} satisfies Config;
