import React, { Component } from "react"
import { render } from 'react-dom'
import { connect } from 'react-redux'

export class TestPage extends Component {
    render() {
        return (
            <div>
                <h1>测试页面</h1>
            </div>
        )
    }
}

export default connect()(TestPage)