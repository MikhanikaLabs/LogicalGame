import React,{Component} from 'react';
import {Button,Icon} from 'react-materialize';
import classes from './newgame-button.module.css'

export default class NewGameButton extends Component {
    render(){ 
        return(
            <div className={classes.divNewGameButton}>
            <Button  node="a" waves="light" large onClick={()=>this.props.generateValue()}>New Game<Icon right>fiber_new</Icon></Button>
            </div>
        )
}
}