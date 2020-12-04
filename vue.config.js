module.exports = {
    devServer: {
        port: 8099,
        proxy: {
            '/api/': {
                target: 'http://10.10.11.141:8080/',
                ws: true,
                changeOrigin: true,
            },
        }
    },
    publicPath: './'
}
