const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
    entry: './src/index',
    mode: 'development',
    resolve: {
        alias: {
            'auth': path.resolve(__dirname, '../../../auth/fe'), 
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3001,
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-react'],
            },
        },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'storage-app',
            remotes: {
                auth: `auth2@${getRemoteEntryUrl(3002)}`,
            },
            shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    };
  
    function getRemoteEntryUrl(port) {
    const { CODESANDBOX_SSE, HOSTNAME = '' } = process.env;
  
    // Check if the example is running on codesandbox
    // https://codesandbox.io/docs/environment
    if (!CODESANDBOX_SSE) {
        return `//localhost:${port}/remoteEntry.js`;
    }
  
    const parts = HOSTNAME.split('-');
    const codesandboxId = parts[parts.length - 1];
  
    return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}