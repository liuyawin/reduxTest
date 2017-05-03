import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'
import $ from 'jquery'

import './../utils/jquery'
import './../utils/layer'
import './../utils/H-ui'
import './../utils/H-ui.admin.page'

import Header from './../components/Header'
import Breadcrumb from './../components/Breadcrumb'
import Footer from './../components/Footer'

import IndexPage from './../components/indexPage'
import Todo from './../containers/Todo'
import ReduxForm from './../components/ReduxForm'
import ReduxFormTest from './../containers/ReduxFormTest'

import './../../css/static/h-ui/css/H-ui.css'
import './../../css/static/h-ui.admin/css/H-ui.admin.css'
import './../../css/static/iconfont/iconfont.css'
import './../../css/static/skin/skin.css'
import './../../css/static/h-ui.admin/css/style.css'

class Roots extends Component {
    
    render() {
        return (
            <div>
                <Header />
                <aside className="Hui-aside">
                    <div className="menu_dropdown bk_2">
                        <dl id="menu-article">
                            <dt>
                                <i className="Hui-iconfont">&#xe616;</i> 测试标签
                                <i className="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i>
                            </dt>
                            <dd>
                                <ul>
                                    <li><IndexLink to="/">首页</IndexLink></li>
                                    <li><Link to="/Todo">待办事项</Link></li>
                                    <li><Link to="/ReduxForm">Ajax Mock测试</Link></li>
                                    <li><Link to="/ReduxFormTest">ReduxFormTest</Link></li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </aside>
                <section className="Hui-article-box">
                    <Breadcrumb />
                    <div className="Hui-article">
                        <article className="cl pd-20">{this.props.children}</article>
                        <Footer />
                    </div>
                </section>
            </div>
        );
    }
}


const indexPage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./../components/indexPage').default)
    }, 'indexPage')
}

const todo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./../containers/Todo').default)
    }, 'Todo')
}

const reduxForm = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./../components/ReduxForm').default)
    }, 'ReduxForm')
}

const reduxFormTest = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./../containers/ReduxFormTest').default)
    }, 'ReduxFormTest')
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={IndexPage} />
            <Route path="indexPage" component={IndexPage} />
            <Route path="Todo" getComponent={todo} />
            <Route path="ReduxForm" getComponent={reduxForm} />
            <Route path="ReduxFormTest" getComponent={reduxFormTest} />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);

export default RouteConfig;