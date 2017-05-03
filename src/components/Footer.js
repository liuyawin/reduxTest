import React, { Component } from "react"
import { render } from 'react-dom'
import { connect } from 'react-redux'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
			    <p><br /> Copyright &copy;2015.All Rights Reserved.<br /></p>
            </footer>
        ) 
    }
}

export default connect()(Footer)