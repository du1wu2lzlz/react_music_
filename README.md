## 技术栈
```
React全家桶(react-router v4 ) + ant + webpack4 + axios  
Redux 待添加(太难了) 改为[MobX](https://mobx.js.org/)  
https://qiutc.me/post/efficient-mobx.html  

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
## mobx4的总结：
```

(1)使用ES7的Decorators语法时，VSCode编辑器报错：

  在“文件 -> 首选项 -> 设置”中，搜索“experimentalDecorators”，
  增加一句配置：
  "javascript.implicitProjectConfig.experimentalDecorators": true
(2)参考文档

A.官方文档
  https://cn.mobx.js.org/

B.一篇关于mobx介绍的博客：（推荐先看这个，比较浅显易懂）
  https://qiutc.me/post/efficient-mobx.html
  
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
8. state作用域
   属于当前类，不污染其他模块
```
+ 组件
```js
  1. 为了使得组件的可定制性更强，在使用组件的时候，可以在标签上加属性来传入配置参数。
  2. 组件可以在内部通过 this.props 获取到配置参数，组件可以根据 props 的不同来确定自己的显示形态，达到可配置的效果。
  3. 可以通过给组件添加类属性 defaultProps 来配置默认参数。
  4. props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果
  5. 子组件向父组件传参，在子组件中通过调用父组件传递过来的事件props进行组件间的参数传递(数据和事件的双向绑定)
    ```js
    父组件:
    class PCContent extends React.Component{
        constructor(){
            super()
            this.state= {
                data:[],
                userinfo: '初始值'
            }
        }

        changeUserInfo(event){
        this.setState({
            userinfo: event.target.value
          })
        }

        render(){
          return(
             <div className="main_area">
                    <Row >
                       <Col span={16} >
                         <PCRecommend  changeUserInfo={this.changeUserInfo.bind(this)}/>  //ES6语法 关于this指向
                         <p>{this.state.userinfo}</p>
                       </Col>
                       <Col  span={8} >
                         <PCHot/>
                       </Col>
                    </Row>
                </div>
          )
        }
    }

    子组件:
    class PCRecommend extends  React.Component{
        constructor(props){
            super(props);
            this.state = {
              list : []
            }
        }
        render(){
          return(
            <div>
                <input type="button" value="每日推荐" onClick={this.getDailyRecommend.bind(this)}/>
                <input type="text"  onChange={this.props.changeUserInfo}/>
            </div>
          )
        }
    }
    ```
  6. 组件的Refs 
     Refs是访问到组件内部DOM节点唯一可靠的方法
     不要在render或render之前对Refs进行调用
     Refs会自动销毁对子组件的引用
```
+ 路由

```js

```

