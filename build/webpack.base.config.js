
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default {
    entry:'./src/index.ts',
    output:{
        path:__dirname+'/dist',
        filename:'app.js'
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                exclude:/node_modules/,
                loader:'ts-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html' //作用是生成html文件, 生成网站首页
        })
    ]
}
