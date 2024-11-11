// vite-plugin-babel-async.mjs
import { createFilter } from '@rollup/pluginutils';
import { transformAsync } from '@babel/core';

export default function babelAsyncPlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'babel-async',

    async transform(code, id) {
      if (!filter(id)) return null;
      if (id.includes('node_modules')) return null; // Skip node_modules

      const result = await transformAsync(code, {
        filename: id,
        ...options.babelOptions,
      });

      return {
        code: result.code,
        map: result.map,
      };
    },
  };
}
