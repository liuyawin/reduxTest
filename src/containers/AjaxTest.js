import React, { Component } from "react"
import { render } from 'react-dom'
import { connect } from 'react-redux'

import ReduxForm from './../components/ReduxForm'
import * as AjaxActions from '../actions/ajaxAction'

class AjaxTest extends Component {
    
    componentWillMount() {
    }
    componentDidUpdate() {
    }

    submit(){

    }

    render() {
        return (
            <ReduxForm onSubmit={this.submit()} />
        )
    }
}

export default connect()(AjaxTest)