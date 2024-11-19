// const merge=require('webpack-merge');
// const baseConfig=require('./webpack.base.config.js');
// const devConfig=require('./webpack.dev.config.js');
// const prodConfig=require('./webpack.pro.config.js');

import {merge} from "webpack-merge";
import prodConfig from './webpack.pro.config.js'
import devConfig from './webpack.dev.config.js'
import baseConfig from './webpack.base.config.js'
let config=process.env.NODE_ENV === 'production' ? prodConfig : devConfig
const conf=merge(baseConfig, config)
export  default conf
