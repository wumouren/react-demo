import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import Binding from '../components/binding'; // 双向数据绑定
import StyleComponent from '../components/style'; // 引入样式演示模块
import RouterRoot from '../components/routerRoot'; // 引入 router 演示模块

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
           info: '这里是 footer',
           bindingVal: ''
        } 
    }
    changeBinding(str,even){
        this.setState({
        bindingVal:{
                val: even.target.value,
                str: str
           }  
        })
    }
    getChildRefs(item){
        // 获取子节点DOM节点
        console.log(item.refs.head)
    }
    render() {
        return (
            <div>
                <RouterRoot />
                { //   演示 router 注释点多余内容
                    // <Header bindVal = {this.state.bindingVal}/>
                    // <Main/>
                    // <StyleComponent />
                    // <Binding getRefs={this.getChildRefs}  bing={this.changeBinding.bind(this)/*注意 this 指向，这里要bind*/}/> 
                    // <Footer info={this.state.info} />
                }  
            </div>
        )
    }
}

ReactDom.render(
    <Index/>,
    document.getElementById('app')
)