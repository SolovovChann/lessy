const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const fs = require('fs')
const path = require('path')

const html = loadTemplates('./templates')

function loadTemplates(dir) {
  const files = fs.readdirSync(path.resolve(__dirname, dir))

  return files.map(file => {
    const ext = path.extname(file)
    const name = path.basename(file, ext)

    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, dir, `${name}${ext}`),
      minify: false,
    })
  })
}

module.exports = {
  mode: 'development',
  entry: './js/index.js',
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'main.js',
  },

  module: {
    rules: [
      // babel-loader
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      // css loader
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      // less stylesheet loader
      {
        test: /.*\.less$/i,
        use: [
          // compiles Less to CSS
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },

      // fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },

      // images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },

      // html
      {
        test: /\.html$/i,
        loader: 'file-loader',
        options: {
          name: '[name][ext]',
        },
      },

      // pug
      {
        test: /\.pug$/i,
        loader: 'pug-loader',
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ].concat(html),
}
