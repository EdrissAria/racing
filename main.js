 const car1 = document.getElementById('car1');
 const car2 = document.getElementById('car2');
 const win1 = document.getElementById('win1');
 const win2 = document.getElementById('win2');

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
     if(car1.style.left === "1300px"){
         win1.style.opacity = '1'
     }
     
 })


//  $(document).ready(function(){
//     $(document).on('keyup', function(event){
//         if(event.keyCode == 39){
//             $('#car4').css('left', '+=30px');
//         }
//         else if(event.keyCode == 37){
//             $('#car4').css('left', '-=30px');
//         }
//         if($('#car4').css('left') == "1400px"){
//             $('#win1').css('opacity', '1');
//         }

//      })
//     $(document).on('keyup', function(event){
//         if(event.keyCode == 17){
//             $('#car5').css('left', '+=30px');
//         }
//         else if(event.keyCode == 16){
//             $('#car5').css('left', '-=30px');
//         }
//         if($('#car5').css('left') == "1400px"){
//             $('#win2').css('opacity', '1');
//         }

//      })
// })