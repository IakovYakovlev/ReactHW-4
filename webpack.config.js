const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

function setupDevtool() {
    if(IS_DEV) return 'eval';
    if(IS_PROD) return false;
}

module.exports = {
    // Для обучения резолвить другие расширения.
    resolve:{
        extensions:['.js', '.jsx',  '.json', '.ts', '.tsx']
    },

    // Значение mode принимает строку, в которой будет значение либо development либо production
    // Чтобы не хардкодить, а решать это динамически, воспользуемся env переменными.
    mode: NODE_ENV ? NODE_ENV : 'development',
     
    // Указываем откуда начинаем.
    // Указываем __dirname - что это такое? <<<<<<<<<-----------------------------------
    // И название файла с которого будет все начинаться. 
    entry: path.resolve(__dirname, 'src/index.jsx'),
    
    // Указываем куда складывать все файлы, которые он переработает (странспилирует.)
    // output - это объект, внутри которого может существовать множество настроек.
    // path - описываем абсолютный путь до папки dist
    // filename - называем наш бандел index.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },

    // loader - это специальные пакеты, которые позволяют webpacku 
    // преобразовывать файлы одного типа в файлы другого типа.
    // По умолчанию webpack может работать с файлами JS and json, а другие расширение не понятны.
    // Это объект, внутри которого вызываем свойство rules - является массивом.
    // Внутри массива мы и будем настраивать все loaderi которые используем.
    // Для минимальной настрокий loadera необходимы 2 свойства test and .
    module: {
        rules: [
				{
					// Регулярное выражение, в котором описываем рассширения файлов, которые мы собираемся обрабатывать.
					test: /\.[tj]sx?$/,

					// Даем команду, что для обработки нужно использовать ts-loader.
					use: ['ts-loader']
        },
				{
					test: /\.css$/,
					use: [
						'style-loader', {
						loader: 'css-loader',
							options: {
								modules: {
									mode: 'local',
									localIdentName: '[name]__[local]--[hash:base64:5]',
								}
							}
						}
					],
					exclude: GLOBAL_CSS_REGEXP
				},
				{
					test: GLOBAL_CSS_REGEXP,
					use: ['style-loader', 'css-loader']
				}
			]
    },

    // Для копирования файла и модификации этого файла на лету.
    plugins:[
        new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })
    ],
    
    // Чтобы подлялся, минимально неоходимо 3 настройки.
    devServer: {
        port: 3000,
        open: true,
        
        // Перезагружает странциу когда что-то меняется в файлах.
        hot: IS_DEV
    },

    // Фирмируются ли и как формируются сорцмапы.
    devtool: setupDevtool()
};