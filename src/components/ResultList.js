import React, { Component, PropTypes } from 'react'

export default class ResultList extends Component {

    render() {
        const { results } = this.props
        return (
            <div>
                {results.map(result =>
                    <li key={result.id}>{result.result}</li>
                )}
            </div>
        )
    }
}
