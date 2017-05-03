import React, { Component } from "react"
import { render } from 'react-dom'
import { connect } from 'react-redux'

export class Header extends Component {
    componentWillMount() {
    }
    render() {
        return (
            <header className="navbar-wrapper">
                <div className="navbar navbar-fixed-top">
                    <div className="container-fluid cl"> <a className="logo navbar-logo f-l mr-10 hidden-xs" href="/aboutHui.shtml">H-ui.admin</a> <a className="logo navbar-logo-m f-l mr-10 visible-xs" href="/aboutHui.shtml">H-ui</a>
                        <span className="logo navbar-slogan f-l mr-10 hidden-xs">3.0</span>
                        <a aria-hidden="false" className="nav-toggle Hui-iconfont visible-xs" href="javascript:;">&#xe667;</a>
                        <nav className="nav navbar-nav">
                            <ul className="cl">
                                <li className="dropDown dropDown_hover"><a href="javascript:;" className="dropDown_A"><i className="Hui-iconfont">&#xe600;</i> 新增 <i className="Hui-iconfont">&#xe6d5;</i></a>
                                    <ul className="dropDown-menu menu radius box-shadow">
                                        <li><a href="javascript:;"><i className="Hui-iconfont">&#xe616;</i> 资讯</a></li>
                                        <li><a href="javascript:;"><i className="Hui-iconfont">&#xe613;</i> 图片</a></li>
                                        <li><a href="javascript:;"><i className="Hui-iconfont">&#xe620;</i> 产品</a></li>
                                        <li><a href="javascript:;"><i className="Hui-iconfont">&#xe60d;</i> 用户</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <nav id="Hui-userbar" className="nav navbar-nav navbar-userbar hidden-xs">
                            <ul className="cl">
                                <li>超级管理员</li>
                                <li className="dropDown dropDown_hover"> <a href="#" className="dropDown_A">admin <i className="Hui-iconfont">&#xe6d5;</i></a>
                                    <ul className="dropDown-menu menu radius box-shadow">
                                        <li><a href="javascript:;">个人信息</a></li>
                                        <li><a href="#">切换账户</a></li>
                                        <li><a href="#">退出</a></li>
                                    </ul>
                                </li>
                                <li id="Hui-msg"> <a href="#" title="消息"><span className="badge badge-danger">1</span><i className="Hui-iconfont" style={{fontSize:'18px'}}>&#xe68a;</i></a> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default connect()(Header)