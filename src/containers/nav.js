import React, { Component } from "react"
import { render } from 'react-dom'
import { connect } from 'react-redux'

class Nav extends Component {
    
    componentWillMount() {
    }
    componentDidUpdate() {
    }

    render() {
        return <div>
                <h1>页头</h1>
            </div>
    }
}

export default connect()(Nav)