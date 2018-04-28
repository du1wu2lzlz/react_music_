import React from 'react';
import ReactDOM from 'react-dom'; 
import {
   Layout,
   Carousel,
   BackTop 
} from 'antd';
import axios from 'axios';
import PCHot from './pc_hot'
const {Header,Content} = Layout;



class PCContent extends React.Component{
    constructor(){
        super()
        this.state= {
            data:[]
        }
    }
    getBanner () {
        var _this =this;
        axios.get('http://localhost:3000/banner',{}).then(function(response){
            if(response.data){
                let res = response.data.banners;     
                _this.setState({
                    data: res|| []
                })
                
            }   
        }).catch(function(error) {
            alert(error);
        });
    }
    componentDidMount(){
        this.getBanner();
    }
    render(){
        return (
            <Content>
                <div className="topContent">
                    <Carousel className="carousel" autoplay>
                        {
                            this.state.data.map(function(data,index){
                                return (
                                    <div key={index}> <img src={data.pic} /></div>
                                )                             
                            })
                        }
                    </Carousel>                  
                </div>
                <div className="main_area">
                   <PCHot/>
                </div>
                <BackTop />
            </Content>
        )
    }
}

export default PCContent = PCContent;
