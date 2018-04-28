## 技术栈
```
React全家桶 + ant + webpack4 + axios

+ 本项目 借助 https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi 提供的api
+ 工作原理 : 利用 跨站请求伪造 (CSRF), 伪造请求头 , 调用官方 API
+ 使用方式:
  git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
  npm install
  node app.js
  默认端口 3030
+ 调用方式:
  例如: http://localhost:3000/top/list?idx=6
  
本项目构建:
  git clone https://github.com/du1wu2lzlz/react_music_.git
  yarn install 
  yarn start(默认8080端口)
```
## 初探react 
+ JSX: JavaScript对象
```js
   class Header extends Component {
      render () {
        return (
         <div>
             <h1 className='title'>React 小书</h1>
         </div>
        )
  }
}
```
```
注意事项:
1. 一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素。
   但这里要注意的是，必须要用一个外层的 JSX 元素把所有内容包裹起来。返回并列多个 JSX 元素是不合法的
2. 在 JSX 当中你可以插入 JavaScript 的表达式，表达式返回的结果会相应地渲染到页面上。表达式用 {} 包裹
3. 通过 className 给元素添加类名
4. 自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头。
5. on*的事件监听 事件属性名都必须要用驼峰命名法。
6. bind模式: 把事件监听方法中的 this 绑定到当前组件实例上
7. 更改状态 使用setState方法 
   setState 方法由父类 Component 所提供。
   当我们调用这个函数的时候，React.js 会更新组件的状态 state 
   并且重新调用 render 方法，然后再把 render 方法所渲染的最新的内容显示到页面上。
```
