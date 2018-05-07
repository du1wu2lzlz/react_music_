import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    hashHistory
} from 'react-router-dom';

import MediaQuery from 'react-responsive';
import MyRoute from './routers/myRoute';
import MobileMain from './components/mobile/mobile_main';
import PCList from './components/pc/pc_list';

import style from "./css/main.css";
import 'antd/dist/antd.css';


export default class App extends React.Component{
  render(){
    return (
        <div>
            <BrowserRouter>
               <MyRoute></MyRoute>
            </BrowserRouter>
        </div>
        
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
