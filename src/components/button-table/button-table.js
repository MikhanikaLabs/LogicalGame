import React,{Component} from 'react';
import { Button,Icon,Modal} from 'react-materialize';
import classes from './button-table.module.css'

export default class ButtonTable extends Component {
    render(){
        const {updateButton,updateBS,generateRes} = this.props;
        return(
            <div>
              <div className={classes.ulBtnTable}>
                {
                    this.props.options.map((item)=>{
                    if(item.status)
                        return <div key={item.id} className={classes.liBtnTable}><Button  floating large className="blue-grey lighten-3" waves="light" onClick ={()=> updateButton(item.id)}>{item.value}</Button></div>   
                    else
                        return <div key={item.id} className={classes.liBtnTable}><Button  floating large className="blue-grey darken-2" waves="light"  onClick ={()=> updateButton(item.id)}>{item.value}</Button></div>   
                })
                }   
                <div className={classes.liBtnTable}><Button floating large className="deep-orange" waves="light" onClick ={()=> updateBS()}><Icon right>backspace</Icon></Button></div>  

                <div className={classes.liBtnTable}>
                <Modal header="TIP" className={classes.tipModal} fixedFooter  trigger={
                <Button floating large className="indigo" waves="light" ><Icon right>help</Icon></Button>}>
                    Please, try {this.props.tips} ...
                </Modal>
                </div>  
                <div className={classes.liBtnTable}><Button floating large className="green" waves="light" onClick={()=>generateRes()}><Icon right>keyboard_return</Icon></Button></div> 
                </div>            
            </div>
    )
}
}

/*

   <div className={classes.liBtnTable}><Button floating large className="indigo" waves="light" onClick={()=>generateHelp()}><Icon right>help</Icon></Button></div>


             <ul className={classes.ulBtnTable}>
                {
                    this.props.options.map((item)=>{
                    if(item.status)
                        return <li className={classes.liBtnTable}><Button key={item.id} floating large className="grey" waves="light" onClick ={()=> updateButton(item.id)}>{item.value}</Button></li>   
                    else
                        return <li className={classes.liBtnTable}><Button key={item.id} floating large className="red" waves="light"  onClick ={()=> updateButton(item.id)}>{item.value}</Button></li>   
                })
                }   
                <li className={classes.liBtnTable}><Button floating large className="green" waves="light"><Icon right>apps</Icon></Button></li>
                <li className={classes.liBtnTable}><Button floating large className="green" waves="light"><Icon right>apps</Icon></Button></li>
                <li className={classes.liBtnTable}><Button floating large className="green" waves="light"><Icon right>apps</Icon></Button></li> 
                </ul>   
*/