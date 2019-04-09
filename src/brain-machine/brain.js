const generateNewVal = () => {
    var s1 =0,s2=0,s3=0,s4=0;
    var result;
    s1=(Math.floor((Math.random()*10)));
    s2=(Math.floor((Math.random()*10)));
    s3=(Math.floor((Math.random()*10)));
    s4=(Math.floor((Math.random()*10)));

    while (s1===s2 || s1===s3 || s1===s4 || s2===s3 || s2===s4 || s3===s4 
    || s1<1 || s2<1 || s3<1 || s4<1)  {
    s1=(Math.floor((Math.random()*10)));
    s2=(Math.floor((Math.random()*10)));
    s3=(Math.floor((Math.random()*10)));
    s4=(Math.floor((Math.random()*10)));
      // код, тело цикла
    }
    result=1000 * s1 + 100 * s2 + 10 * s3 + s4;
    return result.toString();   
}

const makeResult = (original, memorized) => {
    const result=[0,0];
    let i=0,j=0;
    for(i=0; i< original.length;i++)
    {
        for(j=0; j<memorized.length;j++)
        {
            if(original[i]===memorized[j])
            {
                result[0]++;
                if(i===j)
                    result[1]++;   
            }
        }
    }
    return (result)
}

var Generate = function(start_val) {        
      
    let result;
    while(start_val<9999)
    {
       start_val++;
       var ss1=Math.floor(start_val/1000);           
       var ss2=Math.floor(start_val/100)-ss1*10;
       var ss3=Math.floor(start_val/10)-ss1*100 - ss2*10;
       var ss4=Math.floor(start_val/1)-ss1*1000 - ss2*100 - ss3*10;
       if(ss1!==ss2 && ss1!==ss3 && ss1!==ss4 && ss2!==ss3 && ss2!==ss4 && ss3!==ss4 &&  ss1>0 && ss2>0 && ss3>0 && ss4>0)
       {  

           result=1000 * ss1 + 100 * ss2 + 10 * ss3 + ss4;
           return result;                                                                  
       }
   } 
   return 9999           
}
function compare(a1, a2) {
    return a1.length === a2.length && a1.every((v,i)=>v === a2[i])
}
const getTips = (choice, rating,arr) =>{
    // генерируем подходящее число с несовподающими значениями - считаем, что нашли
    // Проверяем в цикле с каждым ранее введенным вариантом - ответ совпадает?
    //если да ----возвращаем результат
    //если нет... выходим из цикла и ищем новое число
    /*
        foo = choose_val()
        for (i по всему arr)
        {
            res = compare(foo, arr[i].foo)    
            if(res!==arr[i].val)
              generate new value   

        }
        return foo
    */
   // {id:1, choice:"2345",rating :"20", numbers: "234"},
   let startVal=0;
   let status=false;
   let count = 0;
   let tips = 0;
   let histChoice = arr.map((item)=> item.choice)
   histChoice.push(choice);
   let histRaiting = arr.map((item)=> item.rating)
   histRaiting.push(rating);
    while(startVal<9999)
    {
        startVal=Generate(startVal)
        for(let i=0 ; i< histChoice.length; i++)
        {        
            let result=makeResult(startVal.toString(),histChoice[i]); 
            // debugger
            if(compare(result, histRaiting[i]))
                status=true;
            else
            {
                status=false;
                break;
            }            
        }
        if(status)
        {
            
            // console.log(startVal) ;
            count++;
            if(count===1)
              tips=startVal;
        }              
         
    }

    return {tips:tips,count:count}; 

  /* 
  let status=true;
  let j=0;
  let i;
  let result;
  let cc =0;
  let tips;

   while(j<9999)
   {
       j=Generate(j);
       for(i=ccount;i>=0;i--)
       {
           result=Check_val(Mass2Int(obj[i].loc_),j);
           obj[i].res_bust[0]=Math.floor(result/10);
           obj[i].res_bust[1]=Math.floor(result/1)-obj[i].res_bust[0]*10;
            if(obj[i].res_bust[0]!==obj[i].res_[0]  || obj[i].res_bust[1]!==obj[i].res_[1]) 
            {       
                status=false;     
                break;
            }  
            else
            {                 
               status=true;    
            }
        }
        if(status===true)
         {
            console.log(j ) ;
            cc++
            if(cc==1)
               tips=j;
         }        
    }
 */
}

export {generateNewVal, makeResult,getTips};