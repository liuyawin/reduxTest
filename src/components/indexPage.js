import React, { Component } from "react"
import { render } from 'react-dom'
import { connect } from 'react-redux'

var kenanURL = require('../images/kenan.jpg')

export class IndexPage extends Component {
    render() {
        return (
            <div>
                <h1>静夜思</h1>
                <p>床前明月光，疑是地上霜。</p>
                <p>举头望明月，低头思故乡。</p>
                <div>
                </div>
                <img src={kenanURL} />
            </div>
        )
    }
}

export default connect()(IndexPage)
