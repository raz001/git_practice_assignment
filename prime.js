 function primecheck(num){
   count=0
   for(i=1;i<=num;i++){
     if(num%i==0){
       count++
     }
   }
   if(count==2){
        console.log('Prime')
   } else {
     console.log("Not")
   }
 }
primecheck(1);
