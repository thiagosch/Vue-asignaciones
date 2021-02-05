var path = require('path');
module.exports = {
    publicPath: '',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    }
}