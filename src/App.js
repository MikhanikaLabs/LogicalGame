import React, { Component } from 'react';
import Header from './components/header';
import ButtonTable from './components/button-table';
import SearchField from './components/search-field';
import ResultTable from './components/result-table' 
import NewGameButton from './components/newgame-button';
import {generateNewVal,makeResult, getTips} from './brain-machine/brain';
import './App.css';

class App extends Component {
  
  maxLength = 4
  maxID = 1

  state = {
    options : [
        {id:1, value: "1", status: true},
        {id:2, value: "2", status: true},
        {id:3, value: "3", status: true},
        {id:4, value: "4", status: true},
        {id:5, value: "5", status: true},
        {id:6, value: "6", status: true},
        {id:7, value: "7", status: true},
        {id:8, value: "8", status: true},
        {id:9, value: "9", status: true}
    ],
    score : [],
    searchField: "",
    mind : generateNewVal(),
    tips : generateNewVal(),
    enableGame: true
}

changeSearchFieldAdd=(obj,id)=>{
  const idx= obj.options.findIndex((el)=> el.id ===id); 
  let arrSearchField = [];
  if(obj.searchField!=="")
    arrSearchField=String(obj.searchField).split("");
  arrSearchField.push(obj.options[idx].value)
  let searchFieldNew=arrSearchField.join("");
  return searchFieldNew;           
}

changeSearchFieldRemove=(obj,id)=>{
  const idx= obj.options.findIndex((el)=> el.id ===id); 
  let str=obj.searchField
  const idfield = str.indexOf(obj.options[idx].value);
  let searchFieldNew=str.slice(0,idfield)+str.slice(idfield+1)
  return searchFieldNew;
}

checkPattern = (obj)=>{
  if((obj.searchField).length >= this.maxLength)
    return false
  else
    return true
}

checkStatusArr =(arr,id)=>{
  const idx= arr.findIndex((el)=> el.id ===id);
  return (arr[idx].status)
}

toggleProperty(arr,id,propName) {
  const idx= arr.findIndex((el)=> el.id ===id);
  const oldItem = arr[idx];
  const newItem = {...oldItem,[propName]: !oldItem[propName]};     
  const before = arr.slice(0,idx);
  const after = arr.slice(idx+1);

  const newArray = [...before,newItem,...after];  
  return newArray;
}

setProperty(arr,id,propName,propValue) {
  const idx= arr.findIndex((el)=> el.id ===id);
  const oldItem = arr[idx];
  const newItem = {...oldItem,[propName]: propValue};     
  const before = arr.slice(0,idx);
  const after = arr.slice(idx+1);
  const newArray = [...before,newItem,...after];  
  return newArray;
}

updateButton = (id) =>{
  if(!this.state.enableGame)
    return 0;
  if(this.state.options.filter((item)=>!item.status).length>this.maxLength-1 
    && this.getStatusById(this.state,id))
    return null
  this.setState((state)=>{ 
    const optionsNew=this.toggleProperty(state.options,id,'status');
    let searchFieldNew = state.searchField;
  if(this.checkStatusArr(optionsNew,id))
    searchFieldNew=this.changeSearchFieldRemove(state,id);
  else
   searchFieldNew = this.changeSearchFieldAdd(state,id);
  return {
    options: optionsNew,
    searchField: searchFieldNew,
    score: state.score,
    mind: state.mind
    }            
})
}
//---------------------------------------------------
getStatusById = (obj,id)=>{
  const idx= obj.options.findIndex((el)=> el.id ===id);   
  return obj.options[idx].status;
}
getIdByValue = (obj,val)=>{
  const idx= obj.options.findIndex((el)=> el.value ===val);   
  return obj.options[idx].id;
}

unique(arr) {
  var result = [];

  nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; 
      for (var j = 0; j < result.length; j++) { 
        if (result[j] === str) continue nextInput; 
      }
      result.push(str);
    }

  return result;
}

updateField=(e)=>{
  if(!this.state.enableGame)
    return 0;
  let term = e.target.value;
  //only digits 1-9
  term = term.replace(/[^1-9]/gim,'')
  let arrSearchField=String(term).split("");
  arrSearchField = this.unique(arrSearchField)
  term=arrSearchField.join("");
  //no more 4
  if(term.length>this.maxLength)
    return null;
	this.setState((state)=>{ 
    let optionsNew=state.options;
    ['1','2','3','4','5','6','7','8','9'].forEach((item)=>{
        const id = this.getIdByValue(state,item); 
        optionsNew=this.setProperty(optionsNew,id,'status',true);
      })
    arrSearchField.forEach((item)=>{
        const id = this.getIdByValue(state,item); 
        optionsNew=this.setProperty(optionsNew,id,'status',false);
      })
      return{...state,options:optionsNew, searchField: term, score: state.score, mind: state.mind}
    })
}
//---------------------------------------
updateBS = () =>{
  if(this.state.searchField.length < 1) 
    return null
  let newSearchField = this.state.searchField.slice(0,this.state.searchField.length-1); 
  let endVal = this.state.searchField[this.state.searchField.length-1]
  this.setState((state)=>{ 
      let optionsNew=state.options;
      const id = this.getIdByValue(state,endVal); 
      optionsNew=this.setProperty(optionsNew,id,'status',true);
      return{...state,options:optionsNew, searchField: newSearchField, score: state.score, mind: state.mind}
    }) 
}
//-------------------------------------
generateValue = ()=>{
  this.setState((state)=>{
    const newMind= generateNewVal();

    return{...state, score: [], mind: newMind, enableGame:true}
  })
}

createScoreItem (choice,rating,numbers){
  return {
    id: this.maxID++,
    choice,rating,numbers  
  }
} 

generateResult = ()=>{
   if(this.state.searchField.length!==this.maxLength)
     return null
  let result=makeResult(this.state.searchField,this.state.mind)
  this.setState((state)=>{
    if(result[0]===4 && result[1]===4)
      state.enableGame=false
    const control=getTips(state.searchField,result,state.score);
    const newItemToScore=this.createScoreItem(state.searchField,result,control.count)
    const before = state.score.slice(0);
    const newArray = [...before,newItemToScore];
    let optionsNew=state.options;

    ['1','2','3','4','5','6','7','8','9'].forEach((item)=>{
        const id = this.getIdByValue(state,item); 
        optionsNew=this.setProperty(optionsNew,id,'status',true);
      })
    const newSearchField="";
    return {
      ...state,
      options:optionsNew,
      score:newArray,
      searchField : newSearchField,
      tips: control.tips
    }
  })
}


allowGame= (status) =>{
  this.setState({    
    enableGame: status
  })
}
  render() {
    return (
      <div className="App">
        <Header generateValue={this.generateValue} />
        <div className="row">                                      
          <div className="col s12 m4 l3"> 
          <NewGameButton generateValue={this.generateValue}/>
          <SearchField searchField={this.state.searchField} updateField={this.updateField} enableGame={this.state.enableGame} />
            <ButtonTable 
              updateButton={this.updateButton} 
              updateBS={this.updateBS} 
              generateRes={this.generateResult}              
              options={this.state.options}
              tips={this.state.tips}/>            
          </div>          
          <div className="col s12 m8 l9">             
            <ResultTable score={this.state.score} /> 
          </div>          
      </div>
    </div>
    );
  }
}

export default App;

