import React from 'react';
 
class SearchBar extends React.Component{

    OnEnter=(e)=>{
        this.props.onSearch(e.target.value)

    }
    render() {
        return(
            <div className="display">
                <label>
                    Search:<br/>
                    <input type="text" name="MovieName" id="search-input" value={this.props.search} onChange={this.OnEnter}/>
                </label>
            </div>
        )
    }
}
export default SearchBar;