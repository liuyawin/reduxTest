import React, { Component } from "react"
import { render } from 'react-dom'
import { connect } from 'react-redux'

export class Breadcrumb extends Component {
    render() {
        return (
            <nav className="breadcrumb">
                <i className="Hui-iconfont"></i> 
                <a href="/" className="maincolor">首页</a>
                <span className="c-999 en">&gt;</span>
                <span className="c-666">我的桌面</span>
                <a className="btn btn-success radius r" style={{lineHeight:'1.6em',marginTop:'3px'}} href="javascript:location.replace(location.href);" title="刷新" >
                    <i className="Hui-iconfont">&#xe68f;</i>
                </a>
            </nav>
        )
    }
}

export default connect()(Breadcrumb)