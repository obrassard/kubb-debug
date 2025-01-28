import { defineConfig } from '@kubb/core';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTs } from "@kubb/plugin-ts"
import { pluginZod } from "@kubb/plugin-zod"
import { pluginReactQuery } from '@kubb/plugin-react-query'

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
        barrelType: false,
      },
      group: {
        type: 'tag',
        name({ group }){
          return `./types/controllers/${group}`
        }
      }
    }),
    pluginZod({
      output: {
        path: './zod',
        barrelType: false,
      },
      group: {
        type: 'tag',
        name({ group }){
          return `./zod/controllers/${group}`
        }
      },
      typed: true,
      dateType: 'string',
    }),
    pluginReactQuery({
      output: {
        path: './hooks',
        barrelType: false,
      },
      group: {
        type: 'tag',
        name({ group }){
          return `./hooks/${group}`
        }
      },
      mutation: {
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
