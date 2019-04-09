import React,{Component} from 'react';
import classes from './search-field.module.css'

export default class SearchField extends Component {
    render(){
      const {enableGame} = this.props;
      const inputField= enableGame ?             
            <div className="col s12">   
            <div className="input-field inline" >
            <i className="material-icons prefix">dialpad</i>
            <input className={classes.SearchField} id="input_text" type="text" data-length="5" 
             value={this.props.searchField} 
              onChange={this.props.updateField} />
              </div>
              </div>
            :
            <div className="col s12">   
            <div className="input-field inline" >
            <i className="material-icons prefix">dialpad</i>
            <input className={classes.SearchField} id="input_text" type="text" disabled data-length="5" 
            value={this.props.searchField} 
            onChange={this.props.updateField} />
            </div>
            </div>



        return(         
            <div className={classes.SearchBlock} >              
            <div className="row " >
            <div className="col s12">                 
              {inputField}
            </div>
            </div>
            </div>

        )
}
}

/*
<div className="row">
            <div className="col s4">
            input field:
            <div className="input-field inline">
            <input className={classes.SearchField} id="input_text" type="text" data-length="5" 
            value={this.props.searchField} 
            onChange={this.props.updateField} />    
            </div>      
            </div>
            </div>
*/