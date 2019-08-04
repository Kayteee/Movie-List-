import React from 'react';
import MovieForm from './MovieForm';
import Table from'./Table'
import SearchBar from './Search';
import './style.css';

class App extends React.Component {
   
    state = {movieDetail:[],
            Searching:''
    };
    
    onFormSubmit=(formValues)=>{
        console.log(formValues)
        this.setState({movieDetail:[...this.state.movieDetail,formValues]})
        console.log(this.state);
    };
    onSearch=(value)=>{
        this.setState({Searching:value})
    }
      
    render() {
        return(
            <div>
            <MovieForm onFormSubmit={this.onFormSubmit}/>
            <SearchBar search={this.state.Searching} onSearch={this.onSearch} /><br/><br/>
            <Table movieList={this.state.movieDetail} searchTerm={this.state.Searching} />
            
            </div>
            
        );
    } 
}      

export default App;