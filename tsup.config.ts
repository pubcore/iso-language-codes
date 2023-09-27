import { defineConfig, Options } from 'tsup'

export default defineConfig(options => {
  const commonOptions: Partial<Options> = {
    entry: {
      index: 'src/index.ts'
    },
    sourcemap: true,
    ...options
  }

  return [
    // Standard ESM, embedded `process.env.NODE_ENV` checks
    {
      ...commonOptions,
      format: ['esm'],
      outExtension: () => ({ js: '.mjs' }),
      dts: true,
      clean: true,
    },
    {
      ...commonOptions,
      format: 'cjs',
      outDir: './dist/cjs/',
      dts: true,
    }
  ] as Options[]
})