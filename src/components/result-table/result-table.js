import React,{Component,Fragment} from 'react';
import classes from './result-table.module.css'

export default class ResultTable extends Component {
    render(){        
        return(
            <div className={classes.divResultTable}>
            <table className="striped">
            <thead>
            <tr>
              <th>Attempt</th>
              <th>Score</th>
              <th>Left options</th>
            </tr>
            </thead>
            <tbody>                
            {
            this.props.score.map((item)=>{
                if(item.rating[0]===4 && item.rating[1]===4){                    
                    return( 
                        <Fragment key={item.id}>
                        <tr >    
                        <td>{item.choice} </td>
                        <td>{item.rating[0]}-{item.rating[1]} </td>
                        <td>{item.numbers} </td>
                        </tr>                    
                        <tr >
                        <td>--------</td>   
                        <td>WIN...</td>
                        <td>--------</td>   
                       </tr>
                       </Fragment>
                    )   
                }
                else
                {
                    return(                  
                        <tr key={item.id}>    
                        <td>{item.choice} </td>
                        <td>{item.rating[0]}-{item.rating[1]} </td>
                        <td>{item.numbers} </td>
                        </tr>                    
                    )
                }
            })
            }   
            </tbody>
        </table> 
        </div>
        )
    }
}


