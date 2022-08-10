const path = require('path')
module.exports = {
	entry: './src/index.js',
	output: {
		// 文件的输出路径
		path: path.resolve(__dirname, 'dist'),
		// 文件名
		filename: 'main3.js',
	},
	// 加载器
	module: {
		rules: [
			// loader配置
		],
	},
	plugins: [
		// 插件
	],
	mode: 'development',
}
