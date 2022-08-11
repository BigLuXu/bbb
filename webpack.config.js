const path = require('path')
module.exports = {
	entry: 'src/index.tsx',
	output: {
		// 文件的输出路径
		path: path.resolve(__dirname, 'dist'),
		// 文件名
		filename: 'static/js/[name].js',
	},
	// 加载器
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					// [style-loader](/loaders/style-loader)
					{ loader: 'style-loader' },
					// [css-loader](/loaders/css-loader)
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
					// [sass-loader](/loaders/sass-loader)
					{ loader: 'postcss-loader' },
				],
			},
			{ test: /\.ts$/, use: 'ts-loader' },
		],
	},
	plugins: [
		// 插件
	],
	mode: 'development',
}
