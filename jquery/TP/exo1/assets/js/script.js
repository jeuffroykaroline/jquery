

$(function(){
   var number = 69
   var counter = 0;


    $('#game').submit(function(event){
      counter++;
         console.log(counter);


   var game = $('#number').val();

             if(game == number){
                alert ('gagné ! Tu as trouvé le juste prix ' + counter + ' fois ')
                  }

             else if(game < number){
                alert('c\'est plus !')}

             else {
                alert('c\'est moins !')}  
               
          
   });


});