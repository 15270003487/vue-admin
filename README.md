## vue-admin 学习笔记

- author : [手把手撸码前端![](https://i2.hdslb.com/bfs/face/6672ed806d1710531ec540b9199a9c67bea132de.jpg_64x64.jpg)](https://space.bilibili.com/431551452?from=search&seid=14921469272694410170)

- source : [bilibili](https://www.bilibili.com/)

---

---

---

## 1. 第一课

> git 命令
>
> > - git branch _查看 git 分支_
> > - git branch [name] _创建分支_
> > - git branch -a _查看分支(包含远程分支)_
> > - git checkout [name] _切换分支_
> > - git checkout -b [name] _创建并选择分支_
> > - git push _推送,远程无该分支时命令行会出现推送分支的命令_
> > - git status _查看状态_
> > - git add . _暂存所有文件(存储在本地仓库)_
> > - git commit -m '这里是当前提交的描述' _提交_
> > - git push _推送_
> > - git pull _拉取_

## 2. 第二课

> 安装 vue/cli3.0
>
> > - npm uninstall vue/cli -g _删除 vue 全局包_
> > - npm install @vue/cli -g _安装最新的 vue 全局包_

## 3. 第三课

> vue.config.js
>
> > - vue 不会自动生成,要自己手动创建,与 package.json 同级
> > - 配置 css
> >   > ```js
> >   > module.exports = {
> >   >   // css相关配置
> >   >   css: {
> >   >     // 是否使用css分离插件 ExtractTextPlugin
> >   >     extract: true, //注释css热更新生效
> >   >     // 开启 CSS source maps?
> >   >     sourceMap: false,
> >   >     // css预设器配置项
> >   >     loaderOptions: {
> >   >       sass: {
> >   >         prependData: `@import "./src/>>>styles/main.scss";`
> >   >       }
> >   >     }
> >   >     // 启用 CSS modules for all css / >>>pre-processor files.
> >   >     // modules: false
> >   >   },
> >   >   // 第三方插件配置
> >   >   pluginOptions: {}
> >   > };
> >   > ```

> 引入全局样式
>
> > - 创建 styles 文件夹,创建 main.scss 文件. 在 vue.config.js css.loaderOptions.sass.prependData 引入 normallize.scss

> router 重定向
>
> > - router/index.js
> >   > ```js
> >   > {
> >   > path: '/',
> >   > redirect: 'login'
> >   > }
> >   > ```

> element-ui 依赖
>
> > - [官网](https://element.eleme.cn/#/zh-CN)
> > - 安装依赖
> >
> >   > ```js
> >   > npm i element-ui -S
> >   > ```
> >
> > - main.js 引入
> >   > ```js
> >   > import ElementUI from "element-ui";
> >   > import "element-ui/lib/theme-chalk/index.css";
> >   > Vue.use(ElementUI);
> >   > ```
