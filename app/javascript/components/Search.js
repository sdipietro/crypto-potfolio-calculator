import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        const searchResults = this.props.searchResults.map( curr => <li key={curr.id}>{curr.name}</li>)
        return(
            <div>
                <h1>Cryptocurrency Potoflio Calculator</h1>
                <form>
                    <div className="form-group">
                        <label>Search for a Currency:</label><br/>
                        <input onChange={this.props.handleChange} autoComplete="off" type="text" name="name" placeholder="Ex: Bitcoin, Ethereum, Dogecoin..." value={this.props.name} className="field"></input>
                    </div>
                </form>
                <div className="currency-list">
                    {searchResults}
                </div>
            </div>
        )
    }
}

export default Search