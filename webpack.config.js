// Path is in Node for free and will make simple resolving of directories no
// matter which part of your file system your library lives in
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');

// Webpack is just a bunch of keys on module.exports!
module.exports = function(webpackEnv) {
  console.log(webpackEnv);
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return {
    // This is where our app starts. This is why we have done all this importing
    // and exporting, to get to here
    entry: './src/index.js',
    // module (I know it's a bit weird to have module.exports.module) is where we
    // define all the rules for how webpack will deal with thing.
    module: {
      // rules takes an array, each item containing the respective rules
      rules: [
        {
          // First up, our JavaScript rules.
          // If you want to use the .jsx extension, you can change this line to
          // test: /\.jsx?$/,
          // The ? in the regex just means "optional"
          test: /\.js$/,
          // Don't bother spending time transpiling your installed packages
          // exclude: /node_modules/,
          // This is where we tell webpack to use babel to transpile our JS.
          // The configuration can go here, but in this case it's in ./babelrc.js
          use: {
            loader: 'babel-loader'
          }
        },
        {
          // I haven't used SCSS in the base example, but it's here for you if you
          // want! If you want to use CSS, you can change this next like's regex to
          // /\.(css|scss)$/ or even just /\.css$/
          test: /\.scss$/,
          use: [
            // These three libraries are commonly used together to turn Sass into
            // CSS, then be able to load the CSS directly with imports. From there
            // It gets put in the DOM for you.
            { loader: isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader },
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        },
        {
          test: /\.less$/,
          use: [
            { loader: isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader },
            { loader: 'css-loader' },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true
              }
            }
          ]
        },
        {
          // Some image formats so you can import images
          test: /\.(png|gif|jpg|svg|eot|ttf|woff)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 50000
            }
          }
        }
      ]
    },
    // Here we define explicitly the file types we intend to deal with
    resolve: {
      extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
      alias: {
        '~': path.resolve('src')
      }
    },
    // This is where we define how everything gets output.
    // dist is a common output folder, and it should be gitignored. The build can
    // be run after publishing so you don't wind up with it in source control
    output: {
      path: path.resolve(__dirname, 'dist/'),
      publicPath: '',
      // You can do fun things here like use the [hash] keyword to generate unique
      // filenames, but for this purpose hui.js is fine. This file and path will
      // be what you put in package.json's "main" field
      filename: 'hui.js',
      // This field determines how things are importable when installed from other
      // sources. UMD may not be correct now and there is an open issue to fix this,
      // but until then, more reading can be found here:
      // https://webpack.js.org/configuration/output/#output-librarytarget
      libraryTarget: 'umd'
    },
    externals: {
      antd: 'antd',
      react: {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react'
      },
      'prop-types': {
        root: 'PropTypes',
        commonjs: 'prop-types',
        commonjs2: 'prop-types'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs: 'react-dom',
        commonjs2: 'react-dom'
      },
      'react-dom/server': {
        root: 'ReactDOMServer',
        commonjs: 'react-dom/server',
        commonjs2: 'react-dom/server'
      }
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          }
        }
      },
      minimize: isEnvProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              // we want terser to parse ecma 8 code. However, we don't want it
              // to apply any minfication steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              // https://github.com/facebook/create-react-app/pull/4234
              ecma: 8
            },
            compress: {
              ecma: 5,
              warnings: false,
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // https://github.com/facebook/create-react-app/issues/2376
              // Pending further investigation:
              // https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false,
              // Disabled because of an issue with Terser breaking valid code:
              // https://github.com/facebook/create-react-app/issues/5250
              // Pending futher investigation:
              // https://github.com/terser-js/terser/issues/120
              inline: 2
            },
            mangle: {
              safari10: true
            },
            output: {
              ecma: 5,
              comments: false,
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true
            }
          },
          // Use multi-process parallel running to improve the build speed
          // Default number of concurrent runs: os.cpus().length - 1
          parallel: true,
          // Enable file caching
          cache: true,
          sourceMap: false
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: false
          }
        })
      ]
    },
    plugins: [
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: 'hui.css'
        })
    ].filter(Boolean)
  };
};
