// for(let i=0;i<=5;i++){
//   for(let j=0;j<=5;j++){
//     console.log(i,j)
//   }
// }

let star=''
for(let i=0;i<6;i++){
  for(let j=0;j<6;j++){
   star+='*'
  }

  star+='\n'
    
}

console.log(star)




let stard=''
for(let i=0;i<6;i++){
  for(let j=0;j<i;j++){
   stard+='*'
  }

  stard+='\n'
    
}

console.log(stard)

let starde=''
for(let i=0;i<=5;i++){
  for(let j=0;j<5-i;j++){
   starde+='*'
  }

  starde+='\n'
    
}

console.log(stard)


let stadium=''
for(let i=0;i<=5;i++){
  for(let j=0;j<5-i;j++){
   
    
   stadium+=' '
  }
  for(let k=0;k<=i;k++){
    stadium+='*'

  }
  stadium+='\n'

}

console.log(stadium)


let stop=''
for(let i=0;i<5;i++){
  for(let j=0;j<i;j++){
   
    
   stop+=' '
  }
  for(let k=0;k<5-i;k++){
    stop+='*'

  }
  stop+='\n'

}

console.log(stop)

let tara=''
for(let i=0;i<=6;i++){
  for(let j=0;j<6-i;j++){
    if(i===0||i===5||j===0||j===5-i){
      tara+='*'
    }else{
      tara+=' '
    }
 
  }

  tara+='\n'
    
}

console.log(tara)

let taraa=''
for(let i=0;i<6;i++){
  for(let j=0;j<6;j++){
    if(i===0 || i===5 || j===0 || j===5){
   taraa+='*'

    }else{
   taraa+=' '
    }
  }

  taraa+='\n'
    
}

console.log(taraa)

let ta=''
for(let i=0;i<=5;i++){
  for(let j=0;j<i;j++){
    if( i===5|| j===0 ||j===i-1 ){
      ta+='*'
   
       }else{
        ta+=' '
       }
  }

  ta+='\n'
    
}

console.log(ta)


let op=''
for(let i=0;i<=5;i++){
  for(let j=0;j<=i;j++){
   
    
   op+=' '
  }
  for(let k=0;k<=5-i;k++){
    if(i===0||i===5||k===0||k===5-i){
    op+='*'
  }else{
    op+=' '
  }

  }
  op+='\n'

}

console.log(op)


let opp=''
for(let i=0;i<=5;i++){
  for(let j=0;j<=5-i;j++){
   
    
   opp+=' '
  }
  for(let k=0;k<2*i-1;k++){
    if(i===0||i===5||k===0||k===2*i-2){
    opp+='*'
  }else{
    opp+=" "
  }

  }
  opp+='\n'

}

console.log(opp)

let opt=''
for(let i=0;i<=5;i++){
  for(let j=0;j<=5-i;j++){
   
    
   opt+=' '
  }
  for(let k=0;k<2*i-1;k++){
   
    opt+='*'
      
  
  }
  opt+='\n'

}
console.log(opt)

let cat=''
for(let i=0;i<5;i++){
  for(let j=0;j<i;j++){
   
    
   cat+=' '
  }
  for(let k=0;k<2*(5-i)-1;k++){
   
    cat+='*'
      
  
  }
  cat+='\n'

}
console.log(cat)

let biralo=''
for(let i=0;i<=5;i++){
  for(let j=0;j<i;j++){
   
    
   biralo+=' '
  }
  for(let k=0;k<2*(5-i)-1;k++){
    if(i===0||i===5||k===0||k===2*(5-i)-2){
    biralo+='*'
  }else{
    biralo+=' '
  }

  }
  biralo+='\n'

}

console.log(biralo)