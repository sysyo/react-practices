const path = require('path');

module.exports ={
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]' // 이 이름으로 저장해서 지정한 경로('public/assets/images')로 옮겨라
                                                          // [hash]를 사용하면 hashing을 해 준다. 
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/i,
            use:['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i, //$ : 정규 표현식의 끝이라는 뜻  / e? : e 가 있어도 되고 없어도 되고 -> jpg, jpeg
            type: 'asset/resource' // image-loader를 webpack 안에서 지원
        }]
    },
    devtool: "eval-source-map",
    devServer: {
        // contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        // inline: true
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true // routing, refresh 할 때 404 error를 내지 말고 main으로 돌리기
    }
}