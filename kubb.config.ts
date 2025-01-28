import { defineConfig } from '@kubb/core';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTanstackQuery } from '@kubb/swagger-tanstack-query';
import { pluginTs } from '@kubb/swagger-ts';
import { pluginZod } from '@kubb/swagger-zod';

export default defineConfig({
  root: '.',
  input: {
    // Update this path to your OpenAPI schema
    path: './swagger.json',
  },
  output: {
    path: './app/api',
    clean: true,
  },
  plugins: [
    pluginOas({
      output: {
        path: './json',
      },
    }),
    pluginTs({
      output: {
        path: './types',
        exportType: false,
      },
      group: {
        type: 'tag',
        output: './types/controllers/{{tag}}',
      },
    }),
    pluginZod({
      output: {
        path: './zod',
        exportType: false,
      },
      group: {
        type: 'tag',
        output: './zod/controllers/{{tag}}',
      },
      typed: true,
      dateType: 'string',
    }),
    pluginTanstackQuery({
      output: {
        path: './hooks',
        exportType: false,
      },
      group: {
        type: 'tag',
        output: './hooks/{{tag}}',
      },
      framework: 'react',
      mutate: {
        variablesType: 'hook',
        methods: ['post', 'put', 'delete'],
      },
      query: {
        methods: ['get'],
      },
      infinite: false,
      suspense: false,
      client: {
        importPath: '~/http.ts',
      },
    }),
  ],
});
