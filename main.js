 const car1 = document.getElementById('car1');
 const car2 = document.getElementById('car2');
 const win1 = document.getElementById('win1');
 const win2 = document.getElementById('win2');
 const retry = document.getElementById('retry');

 var x = 0;
 var y = 0;

 window.addEventListener('keyup', (event)=>{
     if(event.keyCode === 39){
        car1.style.left = x+"px";
        x = x + 30;
     }
     if(event.keyCode === 17){
        car2.style.left = y+"px";
        y = y + 30;
     }
     if(car1.style.left === "1230px" && car2.style.left !== "1230px"){
         win1.style.opacity = '1'
         retry.style.display = 'block'
     }
     if(car2.style.left === "1230px" && car1.style.left !== "1230px"){
         win2.style.opacity = '1'
         retry.style.display = 'block'
     }
     
 })
