# reactRouter-demo

react 所有方式的路由

所有的路由都必须包含在`Router`里

1. router1:使用`Link`和`Route`的组合

   无注意事项

2. `Route`和`Switch`区别
   
   `Route`会渲染所有的路由

   `Switch`会去对比所有的`Route`,只有遇到匹配上的路由才会渲染，之后就停止匹配了

3. router2:使用`Switch`去包含`Route`

   `Switch`会渲染第一个匹配上的路由

解决方法：

- 将 `<Route path='/'>`放在所有的路由最后一个

- 在 `<Route exact path='/'>`做精确匹配

```
<Router>
    <div className="width">
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/about'>About</Link></div>
        <div><Link to='/user'>User</Link></div>
    </div>
    <Switch>
        <Route path='/'> //会匹配这个，但不是完全精确的匹配，所以路由变化，但是相对应的内容
            <Home/>
        </Route>
        <Route path='/user'>
            <User/>
        </Route>
        <Route path='/about'>
            <About/>
        </Route>
    </Switch>
</Router>
```

4. `router config`将所有的路由提取出来（常用的方法）

   `config.js`
   ```
   export const routes=[{ 
       path:'/', component:home 
    },{ 
        path:'/about', component:about 
    },{ 
        path:'/user', component:user 
    }]
   ```
   正文部分：
   ```
   let route=routes.map((item,index)=>{ 
       return <Route exact path={item.path} component={item.component} key={index}></Route> 
    })
   ```

- `react`路由针对浏览器，提供了 2 种方式，`<BrowserRouter>`and `<HashRouter>`

  两者区别是：`BrowserRouter`路由是用的正则规则去匹配，比如：访问'www:baidu.com'，真实访问的就是这个路由地址，而`HashRouter`不一样，它是在`#`后创建路由，比如：访问'www:baidu.com'，其实访问的是'www:baidu.com/#/'

- `NavLink`是特殊的`Link`，使用方法跟`Link`一致，在浏览器解析的时候会使用`Link`内置的样式`active`,目前没发现其他特别之处

- `Server Rendering`使用`StaticRouter`去包裹，`Client Rendering`使用`BrowserRouter`去包裹

- `Server Rendering`与`Client Rendering`区别？目前不太清楚。。

- `Scroll To Top`：当文章篇幅很长，我们将浏览器的滚动条拉到最下边，然后进行路由切换，进入新页面，浏览器还是会展示之前页面的位置，不雅观

    ```
    window.scrollT(0,0)
    ```

- `router-redux`

5. 传递参数(方式1:/:valueId)

    传递：
    ```
         <Router>
            <Link to='/topic/1'>topic1</Link>
            <Link to='/topic/2'>topic2</Link>
            <Route path='/topic/:topicId'>
                <TopicDetail/>
            </Route>
        </Router>
    ```
    接收:
    ```
    let {topicId}=useRouteMatch().params
    或者：
    let {topicId}=useParams()
    ```
6. hook

    1. useHistory 可以直接在js中操作即将跳转的路由
    2. useLocation 返回location对象的所有参数
    3. useParams 返回路由所带的参数key/value对象
    4. browserRouter HTML5的API
        - 其中baseName表示它的下一级路由自动加上baseName 

    ```
    <BrowserRouter basename="/calendar" />
    <Link to="/today"/> // renders <a href="/calendar/today">
    ```

    5. hashRouter 跟browserRouter差不多，就是路由前会自动加上#

    ```
    <HashRouter basename="/calendar"/>
    <Link to="/today"/> // renders <a href="#/calendar/today">
    ```
    6. Link to参数可以是string/object/function，replace会退回到相应的路由上，不是push一个新页面
    7. navLink 跟link差不多，但是会有个原生的样式改变，会自动加上className的属性
    8. exact 表示是不是需要精确匹配(true/false)
    9. strict 表示末尾的斜杠是否需要匹配(true/false),

    true:
    ```
    path:
    /one/
    location.pathname:
    /one
    /匹配失败
    ```
    10. redirect 重定向

若有其他相关路由信息，欢迎补充～



