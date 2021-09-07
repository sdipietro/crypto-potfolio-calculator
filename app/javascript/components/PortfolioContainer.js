import React, { Component } from 'react'

class PortfolioContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            potfolio: [],
            search_results: [],
            active_currency: null,
            amount: ''
        }
    }
    
    render(){
        return(
            <div>Hello World</div>
        )
    }
}

export default App