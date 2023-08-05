const { defineConfig } = require("@vue/cli-service");
const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
// const AutoImport = require("unplugin-auto-import/webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
      // AutoImport({
      //   include: [
      //     /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      //     /\.vue$/,
      //     /\.vue\?vue/, // .vue
      //     /\.md$/, // .md
      //   ],
      //   resolvers: [VantResolver()],
      // }),
    ],
  },
});
