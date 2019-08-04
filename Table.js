import React from 'react';

class Table extends React.Component {

    tableHeading =()=>{
        return(
        <tr>
            <th>MovieName</th>
            <th>Ratings</th>
            <th>Duration</th>  
        </tr>
        )
    }
    tableDetails=()=>{
        let TableDisplay;
        if(this.props.searchTerm.length>=2){
            TableDisplay=this.props.movieList.filter(movie=>{
                if(movie.MovieName.toLowerCase().startsWith(this.props.searchTerm.toLowerCase())){
                    return true;
                
                }
            })
        }else{
            TableDisplay=this.props.movieList
        }
        TableDisplay.sort((a,b)=>{
            let DurA;
            let DurB;
            if(a.Duration.endsWith("h")){
                DurA=60*a.Duration.replace("h","")
            }else{
                DurB=60*a.Duration.replace("m","")  
            }
            if(b.Duration.endsWith("m")){
                DurB=60*b.Duration.replace("h","")
            }else{
                DurB=60*b.Duration.replace("m","")
            }
            if(parseFloat(DurA)<parseFloat(DurB)){
                return 1;
            }else return -1;
        })
        

        //console.log(this.props);
        return(
            TableDisplay.map(movie=>{
                
            return(
            <tr key={movie.MovieName}>
                <td>{movie.MovieName}</td>
                <td>{movie.Ratings}</td>
                <td>{movie.Duration}</td>  
            </tr>
                )
            })
        )
    }

    
    render() {
        return(
        <div className="display">
            <table>
                <tbody>
                {this.tableHeading()}
                {this.tableDetails()}
                </tbody>
            
            </table>
            
        </div>
        );
    }
}

export default Table;