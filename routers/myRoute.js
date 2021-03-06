import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import ExtendRoute from './extendRoute';
import NotFound from '../utils/notFound'
import PCIndex from '../components/pc/pc_main';
import PCList from "../components/pc/pc_list";

//路由配置
const routes = [
    //首页
    {
        path: '/',
        exact: true,
        component: PCIndex,
    },
    //列表
    {
        path: '/list',
        exact: true,
        component: PCList,
    }
    //用户主页
    
];

//TODO  
// <Redirect from="/my/tologin" to="/my" />

class MyRoute extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, i) => (
                        <ExtendRoute key={i} {...route} />
                    ))}

                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MyRoute;
