const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const { watchFile } = require('fs');
module.exports = {
    // WebPack konfigūracija:
    mode: 'production',
    entry: {
        main: './src/main.js',
        side: './src/side.js'
    },
    output: {
        path: path.resolve('./build'),
        filename: '[name]-[contenthash].js',
        clean: true //Nurodome, jog build direktorijoje esantys failai būtų ištrinti
    },
    // watch: true, //Norint, jog buildinimas būtų atliekamas realiu laiku
    devServer: {
        //Dev serverio konfiguracija
        static: {
            directory: './build'
        },
        port: 5050,
        open: true,
        liveReload: true,
        hot: false
    },
    plugins: [
        new HTMLWebPackPlugin({
            title: 'Mano šauni aplikacija naudojant webpack',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, //Nurodymas surasti visus failus su galūne .css
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/i,
                use: 'babel-loader'
            }
        ]
    }
}