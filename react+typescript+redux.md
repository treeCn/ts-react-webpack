### 一、项目的构建

- 1、创建一个文件夹`ts-react-webpack`

* 2、基本的创建

  ```shell
  npm init --yes
  touch .gitignore
  tsc --init
  ```

* 3、修改`tsconfig.json`的文件

  ```json
  {
    "compilerOptions": {
      "outDir": "./dist",
      "sourceMap": true,
      "noImplicitAny": true,
      "target": "es5",
      "module": "commonjs",
      "strict": true,
      "jsx": "react"
    },
    "include": ["./src/**/*"],
    "exclude": ["node_modules"]
  }
  ```

- 4、安装依赖包

  - @types 开头的包都是 typeScript 的声明文件，可以进入 node_modules/@types/XX/index.d.ts 进行查看
  - [申明文件](https://github.com/DefinitelyTyped/DefinitelyTyped)

  ```shell
  # react的基本包
  npm i react react-dom @types/react @types/react-dom react-router-dom @types/react-router-dom react-transition-group @types/react-transition-group react-swipe @types/react-swipe  -S
  # webpack的包
  npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D
  # typescript的依赖包
  npm i typescript ts-loader source-map-loader -D
  # redux react-redux的包
  npm i redux react-redux @types/react-redux redux-thunk  redux-logger @types/redux-logger -S
  # 路由派发的包
  npm i connected-react-router -S
  # redux的本地存储
  npm i redux-persist
  ```

* 5、`webpack`的配置

  ```js
  const path = require('path');
  const webpack = require('webpack');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
      hot: true,
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: {
        index: './index.html'
      }
    },
    // 定义别名
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.tsx/,
          loader: 'ts-loader'
        },
        {
          test: /\.tsx/,
          enforce: 'pre',
          loader: 'source-map-loader'
        }
      ]
    },
    // 配置插件
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  };
  ```

### 二、组件的基本使用(参考`mster`分支代码)

- 1、关于`props`类型的约束
- 2、关于`state`类型的约束
- 3、关于样式类型的约束

### 三、在项目中使用`redux`和`react-redux`进行数据管理[参考代码`redux`分支]

- 1、根据老套路创建一个`store`的文件夹

* 2、`store/types.tsx`文件

  ```typescript
  export interface Store {
    number: number;
  }
  ```

* 3、`store/actions/counter.tsx`

  ```typescript
  import * as types from './../action-types';

  export interface incrementAction {
    type: typeof types.INCREMENT;
  }

  export interface decrementAction {
    type: typeof types.DECREMENT;
  }
  // 定义当前action的数据类型
  export type Action = incrementAction | decrementAction;

  export default {
    increment(): incrementAction {
      return { type: types.INCREMENT };
    },
    decrement(): decrementAction {
      return { type: types.DECREMENT };
    }
  };
  ```
