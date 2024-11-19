
import {CleanWebpackPlugin} from "clean-webpack-plugin";
export  default {
    plugin: [
        new CleanWebpackPlugin() //每次构建前，先清除dist目录下的文件
    ]
}
