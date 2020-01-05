(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={ulBtnTable:"button-table_ulBtnTable__1uQnr",liBtnTable:"button-table_liBtnTable__2ecUk",tipModal:"button-table_tipModal__3-_f6"}},18:function(e,t,a){e.exports={SearchBlock:"search-field_SearchBlock__XEyBy",SearchField:"search-field_SearchField__17brq"}},26:function(e,t,a){e.exports={divResultTable:"result-table_divResultTable__3evOQ",divItemTable:"result-table_divItemTable__n9Zne"}},27:function(e,t,a){e.exports={divNewGameButton:"newgame-button_divNewGameButton__2oHDM"}},28:function(e,t,a){e.exports=a(80)},33:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a.n(l),c=(a(33),a(15)),s=a(14),o=a(13),u=a(5),d=a(6),m=a(8),h=a(7),f=a(9),p=a(3),v=function(e){var t=e.generateValue;return r.a.createElement(p.Navbar,{brand:"",alignLinks:"left"},r.a.createElement(p.NavItem,{onClick:function(){return t()}},"New Game"),r.a.createElement(p.NavItem,{href:"#"},"Help"))},g=a(11),b=a.n(g),E=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.updateButton,a=e.updateBS,n=e.generateRes;return r.a.createElement("div",null,r.a.createElement("div",{className:b.a.ulBtnTable},this.props.options.map(function(e){return e.status?r.a.createElement("div",{key:e.id,className:b.a.liBtnTable},r.a.createElement(p.Button,{floating:!0,large:!0,className:"blue-grey lighten-3",waves:"light",onClick:function(){return t(e.id)}},e.value)):r.a.createElement("div",{key:e.id,className:b.a.liBtnTable},r.a.createElement(p.Button,{floating:!0,large:!0,className:"blue-grey darken-2",waves:"light",onClick:function(){return t(e.id)}},e.value))}),r.a.createElement("div",{className:b.a.liBtnTable},r.a.createElement(p.Button,{floating:!0,large:!0,className:"deep-orange",waves:"light",onClick:function(){return a()}},r.a.createElement(p.Icon,{right:!0},"backspace"))),r.a.createElement("div",{className:b.a.liBtnTable},r.a.createElement(p.Modal,{header:"TIP",className:b.a.tipModal,fixedFooter:!0,trigger:r.a.createElement(p.Button,{floating:!0,large:!0,className:"indigo",waves:"light"},r.a.createElement(p.Icon,{right:!0},"help"))},"Please, try ",this.props.tips," ...")),r.a.createElement("div",{className:b.a.liBtnTable},r.a.createElement(p.Button,{floating:!0,large:!0,className:"green",waves:"light",onClick:function(){return n()}},r.a.createElement(p.Icon,{right:!0},"keyboard_return")))))}}]),t}(n.Component),y=a(18),j=a.n(y),O=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.enableGame?r.a.createElement("div",{className:"col s12"},r.a.createElement("div",{className:"input-field inline"},r.a.createElement("i",{className:"material-icons prefix"},"dialpad"),r.a.createElement("input",{className:j.a.SearchField,id:"input_text",type:"text","data-length":"5",value:this.props.searchField,onChange:this.props.updateField}))):r.a.createElement("div",{className:"col s12"},r.a.createElement("div",{className:"input-field inline"},r.a.createElement("i",{className:"material-icons prefix"},"dialpad"),r.a.createElement("input",{className:j.a.SearchField,id:"input_text",type:"text",disabled:!0,"data-length":"5",value:this.props.searchField,onChange:this.props.updateField})));return r.a.createElement("div",{className:j.a.SearchBlock},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col s12"},e)))}}]),t}(n.Component),B=a(26),N=a.n(B),F=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:N.a.divResultTable},r.a.createElement("table",{className:"striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Attempt"),r.a.createElement("th",null,"Score"),r.a.createElement("th",null,"Left options"))),r.a.createElement("tbody",null,this.props.score.map(function(e){return 4===e.rating[0]&&4===e.rating[1]?r.a.createElement(n.Fragment,{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,e.choice," "),r.a.createElement("td",null,e.rating[0],"-",e.rating[1]," "),r.a.createElement("td",null,e.numbers," ")),r.a.createElement("tr",null,r.a.createElement("td",null,"--------"),r.a.createElement("td",null,"WIN..."),r.a.createElement("td",null,"--------"))):r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.choice," "),r.a.createElement("td",null,e.rating[0],"-",e.rating[1]," "),r.a.createElement("td",null,e.numbers," "))}))))}}]),t}(n.Component),k=a(27),S=a.n(k),I=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:S.a.divNewGameButton},r.a.createElement(p.Button,{node:"a",waves:"light",large:!0,onClick:function(){return e.props.generateValue()}},"New Game",r.a.createElement(p.Icon,{right:!0},"fiber_new")))}}]),t}(n.Component),_=function(){var e=0,t=0,a=0,n=0;for(e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random()),a=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());e===t||e===a||e===n||t===a||t===n||a===n||e<1||t<1||a<1||n<1;)e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random()),a=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());return(1e3*e+100*t+10*a+n).toString()},x=function(e,t){var a=[0,0],n=0,r=0;for(n=0;n<e.length;n++)for(r=0;r<t.length;r++)e[n]===t[r]&&(a[0]++,n===r&&a[1]++);return a},M=function(e){for(;e<9999;){e++;var t=Math.floor(e/1e3),a=Math.floor(e/100)-10*t,n=Math.floor(e/10)-100*t-10*a,r=Math.floor(e/1)-1e3*t-100*a-10*n;if(t!==a&&t!==n&&t!==r&&a!==n&&a!==r&&n!==r&&t>0&&a>0&&n>0&&r>0)return 1e3*t+100*a+10*n+r}return 9999};function w(e,t){return e.length===t.length&&e.every(function(e,a){return e===t[a]})}var T=function(e,t,a){var n=0,r=!1,l=0,i=0,c=a.map(function(e){return e.choice});c.push(e);var s=a.map(function(e){return e.rating});for(s.push(t);n<9999;){n=M(n);for(var o=0;o<c.length;o++){if(!w(x(n.toString(),c[o]),s[o])){r=!1;break}r=!0}r&&1===++l&&(i=n)}return{tips:i,count:l}},G=(a(79),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).maxLength=4,a.maxID=1,a.state={options:[{id:1,value:"1",status:!0},{id:2,value:"2",status:!0},{id:3,value:"3",status:!0},{id:4,value:"4",status:!0},{id:5,value:"5",status:!0},{id:6,value:"6",status:!0},{id:7,value:"7",status:!0},{id:8,value:"8",status:!0},{id:9,value:"9",status:!0}],score:[],searchField:"",mind:_(),tips:_(),enableGame:!0},a.changeSearchFieldAdd=function(e,t){var a=e.options.findIndex(function(e){return e.id===t}),n=[];return""!==e.searchField&&(n=String(e.searchField).split("")),n.push(e.options[a].value),n.join("")},a.changeSearchFieldRemove=function(e,t){var a=e.options.findIndex(function(e){return e.id===t}),n=e.searchField,r=n.indexOf(e.options[a].value);return n.slice(0,r)+n.slice(r+1)},a.checkPattern=function(e){return!(e.searchField.length>=a.maxLength)},a.checkStatusArr=function(e,t){var a=e.findIndex(function(e){return e.id===t});return e[a].status},a.updateButton=function(e){return a.state.enableGame?a.state.options.filter(function(e){return!e.status}).length>a.maxLength-1&&a.getStatusById(a.state,e)?null:void a.setState(function(t){var n=a.toggleProperty(t.options,e,"status");t.searchField;return{options:n,searchField:a.checkStatusArr(n,e)?a.changeSearchFieldRemove(t,e):a.changeSearchFieldAdd(t,e),score:t.score,mind:t.mind}}):0},a.getStatusById=function(e,t){var a=e.options.findIndex(function(e){return e.id===t});return e.options[a].status},a.getIdByValue=function(e,t){var a=e.options.findIndex(function(e){return e.value===t});return e.options[a].id},a.updateField=function(e){if(!a.state.enableGame)return 0;var t=e.target.value;t=t.replace(/[^1-9]/gim,"");var n=String(t).split("");if(n=a.unique(n),(t=n.join("")).length>a.maxLength)return null;a.setState(function(e){var r=e.options;return["1","2","3","4","5","6","7","8","9"].forEach(function(t){var n=a.getIdByValue(e,t);r=a.setProperty(r,n,"status",!0)}),n.forEach(function(t){var n=a.getIdByValue(e,t);r=a.setProperty(r,n,"status",!1)}),Object(o.a)({},e,{options:r,searchField:t,score:e.score,mind:e.mind})})},a.updateBS=function(){if(a.state.searchField.length<1)return null;var e=a.state.searchField.slice(0,a.state.searchField.length-1),t=a.state.searchField[a.state.searchField.length-1];a.setState(function(n){var r=n.options,l=a.getIdByValue(n,t);return r=a.setProperty(r,l,"status",!0),Object(o.a)({},n,{options:r,searchField:e,score:n.score,mind:n.mind})})},a.generateValue=function(){a.setState(function(e){var t=_();return Object(o.a)({},e,{score:[],mind:t,enableGame:!0})})},a.generateResult=function(){if(a.state.searchField.length!==a.maxLength)return null;var e=x(a.state.searchField,a.state.mind);a.setState(function(t){4===e[0]&&4===e[1]&&(t.enableGame=!1);var n=T(t.searchField,e,t.score),r=a.createScoreItem(t.searchField,e,n.count),l=t.score.slice(0),i=[].concat(Object(s.a)(l),[r]),c=t.options;["1","2","3","4","5","6","7","8","9"].forEach(function(e){var n=a.getIdByValue(t,e);c=a.setProperty(c,n,"status",!0)});return Object(o.a)({},t,{options:c,score:i,searchField:"",tips:n.tips})})},a.allowGame=function(e){a.setState({enableGame:e})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"toggleProperty",value:function(e,t,a){var n=e.findIndex(function(e){return e.id===t}),r=e[n],l=Object(o.a)({},r,Object(c.a)({},a,!r[a])),i=e.slice(0,n),u=e.slice(n+1);return[].concat(Object(s.a)(i),[l],Object(s.a)(u))}},{key:"setProperty",value:function(e,t,a,n){var r=e.findIndex(function(e){return e.id===t}),l=e[r],i=Object(o.a)({},l,Object(c.a)({},a,n)),u=e.slice(0,r),d=e.slice(r+1);return[].concat(Object(s.a)(u),[i],Object(s.a)(d))}},{key:"unique",value:function(e){var t=[];e:for(var a=0;a<e.length;a++){for(var n=e[a],r=0;r<t.length;r++)if(t[r]===n)continue e;t.push(n)}return t}},{key:"createScoreItem",value:function(e,t,a){return{id:this.maxID++,choice:e,rating:t,numbers:a}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{generateValue:this.generateValue}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m4 l3"},r.a.createElement(I,{generateValue:this.generateValue}),r.a.createElement(O,{searchField:this.state.searchField,updateField:this.updateField,enableGame:this.state.enableGame}),r.a.createElement(E,{updateButton:this.updateButton,updateBS:this.updateBS,generateRes:this.generateResult,options:this.state.options,tips:this.state.tips})),r.a.createElement("div",{className:"col s12 m8 l9"},r.a.createElement(F,{score:this.state.score}))))}}]),t}(n.Component));i.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.930b774e.chunk.js.map