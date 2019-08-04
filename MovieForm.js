import React from 'react';

class MovieForm extends React.Component{

    state={
        MovieName: '',
        Ratings: '',
        Duration:''
    }
    
    ValueChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    };

    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.MovieName!=='' && this.state.Ratings!==''&& this.state.Duration!==''){
        this.props.onFormSubmit(this.state);
        this.setState({MovieName:'',Ratings:'',Duration:''})
    }};

    render() {
       return (
        <div className="display">
        <form onSubmit={this.onSubmit}>
        <label>
        MovieName:<br/>
        <input type="text" name="MovieName" id="name-input" onChange={this.ValueChange} value={this.state.MovieName} /><br/><br/>
        Ratings:<br/>
        <input type="text" name="Ratings" id="ratings-input" onChange={this.ValueChange} value={this.state.Ratings} /><br /><br/>
        Duration:<br/>
        <input type="text" name="Duration" id="duration-input"onChange={this.ValueChange}value={this.state.Duration} /><br/><br/>
        </label>
        <input type="submit" value="Submit" id="submit-input"/><br/><br/>
        </form>
        </div>
        
       )


    }
}

export default MovieForm;